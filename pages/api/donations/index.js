// import prisma from '/lib/db';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req
    console.log("METHOD ", method)
    
    if(method === "GET") {
        try {
            const donations = await prisma.donation.findMany()
            // console.log("applications ", applications)
            console.log("Donations found successfully ", donations)
            return res.status(200).json(donations)
        } catch (error) {
            console.log("Failed to find donations ", error)
            return res.json({ message : "No donations found" })
        }
        
    }

    if(method === "POST") {
        // The application needs to be associated with a user
        // Use email -> only make adoption available if registered / logged in
        let data;
        let { 
            type, cardAmount, email, cardNumber, cardName, 
            refNum, gcashAmount, firstName, lastName, gcashNum 
            } = req.body

        if ( type === "gcash"){
            if (!refNum || !gcashAmount ||  !firstName  || !lastName  || !gcashNum){
                console.log("Missing gcash credentials ", { refNum, gcashAmount, firstName, lastName, gcashNum })
                return res.json({ message: "Error missing credentials" })
            }
            data = { type, referenceNumber: refNum, amount: gcashAmount, name: `${firstName} ${lastName}`, gCashNumber: gcashNum }
            console.log("DATA GACASH", data)
        }

        
        if ( type === "card" ){
            if (!cardAmount || !email ||  !cardNumber  || !cardName ){
                console.log("Missing card credentials ", { cardAmount, email, cardNumber, cardName, })
                return res.json({ message: "Error missing credentials" })
            }
            data = { type, amount: cardAmount, email, cardNumber, name: cardName }
            console.log("DATA CARD", data)

        }

        try {
            const donation = await prisma.donation.create({
                data
            })

            console.log("Donation created successfully", donation)
            return res.json({ message: "Donation submitted successfully" })

        } catch (error) {
            console.log("Failed to add donation ", error)
            return res.json({ message : "Donation submission failed" })
        }
    }

};
