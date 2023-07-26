import prisma from '/lib/db';
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
import path from "path";
import fs from "fs/promises";
import cloudinary from 'cloudinary';
import readFile from "lib/readFile";

export default async function handler(req, res) {
    const { method } = req
        if(method === "PATCH") {
      // NOTE: Cloudinary not uploading to correct folder

      // This code uploads locally if needed
        try {
            await fs.readdir(path.join(process.cwd() + "/public", "/images/profile"));
        } catch (error) {
            await fs.mkdir(path.join(process.cwd() + "/public", "/images/profile"));
        }
        const result = await readFile(req, false);
        const {name, bio, email, password, newpassword} = result.fields
        const { image } = result.files
        
        console.log("{name, bio, email", name[0], bio[0], email[0], )
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
        // Use default image if no upload 
        if (uploadedFile) {
            data = {
                name: name[0],
                email: email[0],
                bio: bio[0], 
                image: uploadedFile.url
                }
        } else {
            data = {
                name: name[0],
                email: email[0],
                bio: bio[0], 
                }
        }
        try {
            const user = await prisma.user.update({ 
                where:  { email: email[0] },
                data
            })
            console.log("Profile updated successfully", user.name, user.image)
            return res.status(200).json(
                {
                    message: "Profile updated successfully",
                    user
                })
        }catch (error){
            console.log("User update failed ", error)
            return res.status(400).json({message: "User update failed."})
        }
    }
    // res.send("profile")
}

export const config = {
  api: {
    bodyParser: false
  },
}
