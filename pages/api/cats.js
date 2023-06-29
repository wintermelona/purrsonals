import prisma from '/lib/db';

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req

    if(method === "GET") {
        const result = await prisma.cat.findMany()
        console.log(result)
        res.status(400).json(await result)
    }

    if(method === "POST") {
        res.send("POST /cats")
    }

    if(method === "PUT") {
        // const {id} = req.query
        res.send("PUT /cats")
    }

    if(method === "DELETE") {
        res.send("DELETE /cats")
    }

    res.send("hello")
    
};
