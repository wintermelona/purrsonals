// import prisma from '/lib/db';
import { select } from '@material-tailwind/react'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req
    console.log("METHOD ", method)
    
    if(method === "GET") {
        try {
            const applications = await prisma.application.findMany()
            // console.log("applications ", applications)
            console.log("Applications found successfully ")
            res.status(200).json(applications)
        } catch (error) {
            console.log("Failed to find applications ", error)
            res.json({ message : "No applications found" })
        }
        
    }

    if(method === "POST") {
        // The application needs to be associated with a user
        // Use email -> only make adoption available if registered / logged in
        let { firstname, lastname, address, phone, email, occupation,  adoptee, description, buildingType, adoption, renting } = req.body
        if ( !firstname || !lastname ||  !address  || !phone  || !email || !occupation  || !adoptee || !description || !buildingType || adoption === null || renting === null ){
            console.log("Missing credentials ", { firstname, lastname, address, phone, email, occupation,  adoptee, description, buildingType, adoption, renting })
            return res.json({message: "Error missing credentials"})
        }

        adoption = Boolean(adoption)
        renting = Boolean(renting)

        try {
            const user = await prisma.user.findUnique( { where : { email }} )
            if(user === null){
                throw Error(`User with email: ${email} is not found.`)
            }
            const userId = user.id

            const application = await prisma.application.create({
                    data: { 
                    firstname, 
                    lastname, 
                    address, 
                    phone, 
                    email, 
                    userId,
                    occupation,  
                    adoptee, 
                    description, 
                    buildingType, 
                    adoption, 
                    renting, 
                    }
                })
            console.log("Application created successfully", application)
            res.json({ message: "Application submitted successfully" })

        } catch (error) {
            console.log("Failed to create application ", error)
            res.json({ message : "Application submission failed" })
        }
    }

};
