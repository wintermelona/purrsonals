import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function counter(req, res) {
    const { method } = req

    const catsTotal = await prisma.cat.count()
    const catsFemale = await prisma.cat.count({ where : { sex: "Female" } })
    const catsMale = await prisma.cat.count({ where : { sex: "Male" } })
    const applicationsTotal = await prisma.application.count()
    const applicationsDone = await prisma.application.count({ where: { status: "Completed" }})
    const applicationsOngoing= await prisma.application.count({ where: { OR : [ {status: "Processing"}, {status: "Screening"} ] } })
    const donationsTotal= await prisma.donation.count()
    res.status(200).json({catsFemale, catsMale, catsTotal, applicationsTotal, applicationsDone, applicationsOngoing, donationsTotal})
};
