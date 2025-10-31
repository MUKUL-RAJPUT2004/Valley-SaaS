export interface Video {
  title: string;
  id: string;
  description: string | null;
  publicId: string;
  originalSize: string;
  compressedSize: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}