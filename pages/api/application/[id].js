// import prisma from '/lib/db';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    // GET specific application
    // PATCH a specfic application
    // DELETE a specific application
    const { method } = req

    if (method === "PATCH") {
        const { id } = req.query
        const { status } = req.body
        const application = await prisma.application.update({
            where: {
                id
            },
            data: {
                status
            }
        })
        console.log(`Application ID ${application.id} name: ${application.firstname } ${application.lastname}`, "| Updated application, new status: ", application.status )
        res.status(200).json({message: "Application edit success"})
    }

    
};
