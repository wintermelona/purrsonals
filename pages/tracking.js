import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Select, Option } from "@material-tailwind/react";
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Application from '@/components/Application';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Adopt() {
    const [applications, setApplications] = useState([])
    const { data: session, status } = useSession()
    const router = useRouter()

    
    
    useEffect(() => {
      getUserApplications()
      if(status === "unauthenticated") {
        router.replace("/adopt")
        alert("Please login to track application status")
      }
    }, [session])
    
    async function getUserApplications() {
        // console.log("session.user.email", session)
        const res = await fetch(`api/application/${session?.user?.email}`, {
            method: "GET",
        })
        const result = await res.json()
        // console.log("result ", result, typeof result.applications)
        setApplications(result.applications)
        // console.log("APPS ", applications)
    }

    return (
        <>
            <Head>
                <title>Adopt</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>

            <Navbar />

            <div className="m-10 h-screen">
                 { applications?.length > 0 ?
                    applications?.map((application, id) => (
                        <Application {...application} key={id} editable={false} />
                    )) : <span className='text-xl'>No user applications found. Click <Link className='underline text-[#C5996C]' href={'/adopt'}> here</Link> to submit one.</span>
                }
            </div>
            <Footer />
        </>
    );
}