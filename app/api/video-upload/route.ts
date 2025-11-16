export const runtime = "nodejs";
import { Readable } from "stream";
import prisma from '@/lib/prisma';




import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary, UploadStream } from 'cloudinary';
import { auth } from '@clerk/nextjs/server';
import error from 'next/error';



// Configuration
    cloudinary.config({ 
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret:  process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
    });

//becoz we are using cloudinary
interface cloudinaryUploadResult{
    public_id: string;
    bytes: number;
    duration?: number;
    [key: string]: any
}

export async function POST(request: NextRequest){
    
    try {
    
        const { userId } = await auth();
        //check if user is sign in or not, although its additional as we have middleware already setup to protect
        if(!userId){
            return NextResponse.json({error: "Unauthorised"}, {status: 401})
        }

        //important check
        if(
            !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET
        ){
            return NextResponse.json({error: "Cloudinary is not configured"}, {status: 500})
        }


        const formData = await request.formData();
        const file = formData.get("file") as File | null;
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const originalSize = formData.get("originalSize") as string;    //frontend thing        

        if(!file){
            return NextResponse.json({error: "No file provided"}, {status: 400})
        }

        const bytes = await file.arrayBuffer(); //remeber its same 
        // const buffer = Buffer.from(bytes);


        // Convert to readable stream for Cloudinary
        const readable = Readable.from(Buffer.from(bytes));

        const result = await new Promise<cloudinaryUploadResult>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
            resource_type: "video",
            folder: "video-uploads",
            chunk_size: 6_000_000, // upload in 6MB chunks
            timeout: 600000, // allow up to 10 minutes
            transformation: [
                { quality: "auto" },
                { fetch_format: "mp4" }
            ]
            },
            (error, result) => {
            if (error) {
                console.error("CLOUDINARY UPLOAD ERROR:", error);
                reject(error);
            } else {
                console.log("UPLOAD SUCCESS:", result);
                resolve(result as cloudinaryUploadResult);
            }
            }
        );

        readable.pipe(uploadStream);
        });

        const video = await prisma.video.create({   //save data to prisma
            data: {
                title,
                description,
                publicId: result.public_id,
                originalSize: originalSize,
                compressedSize: String(result.bytes),
                duration: result.duration || 0,

            }
        })
        return NextResponse.json(video, { status: 200 });
    
    } catch (error) {
        console.log("Upload video failed", error);

        return NextResponse.json({error: "Upload video failed"}, {status: 500});
    } 

}