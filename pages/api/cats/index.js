// import prisma from '/lib/db';
import path from "path";
import fs from "fs/promises";
import cloudinary from 'cloudinary';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import readFile from "lib/readFile";

export default async function handler(req, res) {
    // POST cat can parse images
    const { method } = req
    console.log("METHOD ", method)
    if(method === "GET") {
        const result = await prisma.cat.findMany()
        const cats = await result
        // console.log("cats ", cats)
        res.status(200).json(cats)
    }

    if(method === "POST") {
      // NOTE: Cloudinary not uploading to correct folder

      // This code uploads locally if needed
        try {
            await fs.readdir(path.join(process.cwd() + "/public", "/images"));
        } catch (error) {
            await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
        }
        const result = await readFile(req, false);
        const {name, sex, age, description} = result.fields
        const { image } = result.files
        
        // console.log("{name, sex, age, description}", name[0], sex[0], age[0], description[0])
        // console.log("image ", image[0].filepath || null)
        
        let uploadedFile;
        if (image) {
            // Save image to cloudinary
            try {
            uploadedFile = await cloudinary.uploader.upload(image[0]?.filepath, {
                folder: "purrsonals",
                resource_type: "image",
            });
            } catch (error) {
            res.status(500);
            throw new Error("Image could not be uploaded");
            }
        // console.log("UPLOADED", uploadedFile)
        }

        let data
        // Use default cat image if no upload 
        if (uploadedFile) {
            data = {
                name: name[0],
                sex: sex[0], 
                age: age[0], 
                description: description[0],
                image: uploadedFile.url
                }
        } else {
            data = {
                name: name[0],
                sex: sex[0], 
                age: age[0], 
                description: description[0],
                }
        }
        try {
            const cat = await prisma.cat.create({ data })
            console.log("Cat created successfully")
            res.status(200).json(
                {
                    message: "Successfully created cat",
                    cat
                })
        }catch (error){
            console.log("Cat creation failed ", error)
            res.status(409).json({message: "Cat creation failed."})
        }
    }

};
export const config = {
  api: {
    bodyParser: false
  },
}

