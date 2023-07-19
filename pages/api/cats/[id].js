// import prisma from '/lib/db';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async function handler(req, res) {
    // GET specific cat
    // PUT a specfic cat, can handle images
    // DELETE a specific cat

    const { method } = req

    if (method === "GET") {
        
    }

    if (method === "PUT") {
        
    }


    if (method === "DELETE") {
        const { id } = req.query
        console.log("id ", id)

        try {
            const cat = await prisma.cat.delete({
                where: {
                    id
                }
            })
            console.log(cat)
            return res.status(200).json(cat) 
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Cat not found " + error})
        }
    }

};
