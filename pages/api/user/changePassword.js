import bcrypt from 'bcrypt'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

// import prisma from '/lib/db';

export default async function handler(req, res) {
    const { email, password, newPassword, confirmPassword } = req.body

    if (!email || !password) {
        console.log("Missing credentials { email, password}",  email, password )
        return res.json({message: "Missing credentials"})
    }

    if(newPassword !== confirmPassword) {
        return res.json({ message: "Passwords dont match" })
    }

    const result = await checkPassword(email, password)
    if(result.match !== true) {
        console.log("result ", result)
        return res.json({ message: result.message })
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10)

    try {
        const update = await prisma.user.update({
        where: {
            email
        },
        data: {
            password: hashedPassword,
        }
    })
        console.log("Successfully changed password of user: ", update.name)
        return res.status(200).json({message: "Successfully changed password!"})

    } catch (error) {
        console.log("Failed to change password. ", error)
        return res.status(400).json({message: "Failed to change password."})
    }
};



export async function checkPassword(email, password) {
    
        try {
            // check to see if user exists
            var user = await prisma.user.findUnique({
                where: {
                    email
                }
            });
            // if no user was found 
            if (!user || !user?.password) {
                throw new Error('No user found')
            }

            // check to see if password matches
            const passwordMatch = await bcrypt.compare(password, user.password)

            // if password does not match
            if (!passwordMatch) {
                throw new Error('Incorrect password. Please try again.')
            }
        } catch (error) {
            return { message: `${error}` }
        }

        return { match: true, user};

};