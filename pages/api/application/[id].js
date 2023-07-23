// import prisma from '/lib/db';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    // GET specific application
    // PATCH a specfic application
    // DELETE a specific application
    const { method } = req
    if (method === "GET") {
        const { id: email } = req.query
        console.log("meail ", email)
        // const {email} = req.body
        try {
            const applications = await prisma.user.findUnique({
                where: {
                    email
                }, 
                select: {
                    applications: true,
                }
            })
            console.log("User applications found. ")
            return res.json({ message: "User applications found successfully", ...applications })
        } catch (error) {
            console.log("No user applications found. ", error)
            return res.json({ message: "No user applications found." })
        }
    }

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
        res.status(200).json({message: "Application updated successfully"})
    }

    
};
