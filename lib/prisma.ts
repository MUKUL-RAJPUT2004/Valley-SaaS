// lib/prisma.ts

import { PrismaClient } from '@prisma/client'

// This makes sure that in development (hot-reload), we don't
// create a new PrismaClient instance on every file save.
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // You can add this to see queries in your console during development
    // log: ['query'], 
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma