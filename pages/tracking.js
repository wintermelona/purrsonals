import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Select, Option } from "@material-tailwind/react";

export default function Adopt() {
    return (
        <>
            <Head>
                <title>Adopt</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>

            <Navbar />

            <div className="m-10 h-screen">
                <div className="collapse collapse-arrow bg-white border-[#efeeee] border-2 w-full">
                    <input type="checkbox" />
                    <div className="collapse-title text-md">
                        Application ID
                        <div className="badge bg-[#9cbf62] border-0 text-white ml-2">Status</div>
                    </div>
                    <div className="collapse-content">
                        <p>Name: </p>
                        <p>Address: </p>
                        <p>Phone: </p>
                        <p>Email: </p>
                        <p>Occupation: </p>
                        <p>Adopted before?: </p>
                        <div className="divider" />
                        <p>Describe ideal cat: </p>
                        <p>Type of building: </p>
                        <p>Renting?: </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}