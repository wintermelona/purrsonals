import bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import {NextResponse} from 'next/server';



export default async function register(req, res) {
    const {name, email, password} = req.body

    console.log("{name, email, password}", name, email, password)

    if (!name || !email, !password) {
        res.status(400).json({message: "Invalid Credentials, please try again."})
    }

    const exists = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(exists) {
        res.status(400).json({message: "Email already in use, please use another one."})
        throw new Error("User email already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            name, 
            email, 
            password: hashedPassword
        }
    })

    res.status(201).json({message: "User successfuly created"})
};
