
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req, res) {
    // prisma
    const dbRes = await prisma.message.create({data : {
        message: "Hello PlanetScale"
    }})
    
    res.status(200).json({dbRes: dbRes})

};
