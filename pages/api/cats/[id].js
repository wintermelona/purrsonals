// import prisma from '/lib/db';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import path from "path";
import fs from "fs/promises";
import cloudinary from 'cloudinary';
import readFile from "lib/readFile";

export default async function handler(req, res) {
    // PATCH a specfic cat, can handle images
    // DELETE a specific cat

    const { method } = req

    if (method === "PATCH") {
        const { id } = req.query
        try {
            var cat = await prisma.cat.findUnique({
                where: {
                    id
                }
            })
            console.log("Cat found successfully.")
        } catch (error) {
            console.log("Cat not found ", error)
            return res.status(400).json({message: "Cat not found."})
        }

       try {
            await fs.readdir(path.join(process.cwd() + "/public", "/images"));
        } catch (error) {
            await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
        }
        console.log("req ", req);
        const result = await readFile(req, false);
        console.log("result.fields ", result.fields);
        const { name, sex, age, description} = result.fields
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
        // Use existing cat image if no upload 
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
                image: cat.image
                }
        }
        try {
            const updated = await prisma.cat.update({
                where: { id }, 
                data
            })
            console.log("Cat updated successfully", updated)
            res.status(200).json(
                {
                    message: "Successfully updated cat",
                    image: cat.image
                })
        }catch (error){
            console.log("Cat update failed ", error)
            res.status(409).json({message: "Cat update failed."})
        }
    }


    if (method === "DELETE") {
        console.log("Triggered delete")
        const { id } = req.query
        console.log("id ", id)

        try {
            const cat = await prisma.cat.delete({
                where: {
                    id
                }
            })
            console.log("Cat deleted, ", cat.id, cat.name, cat.description, cat.image)
            return res.status(200).json(cat) 
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Cat not found " + error})
        }
    }

};

export const config = {
  api: {
    bodyParser: false
  },
}