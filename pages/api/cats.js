import prisma from '/lib/db';

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req
    console.log("METHOD ", method)
    if(method === "GET") {
        const result = await prisma.cat.findMany()
        const cats = await result
        // console.log("cats ", cats)
        res.status(400).json(cats)
    }

    if(method === "POST") {
        // Create cats??
        res.send("POST /cats")
    }

    if(method === "PUT") {
        // const {id} = req.query
        res.send("PUT /cats")
    }

    if(method === "DELETE") {
        res.send("DELETE /cats")
    }

    // res.send("hello")
    
};
