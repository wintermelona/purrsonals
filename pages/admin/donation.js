import Head from 'next/head';
import AdminNav from '@/components/AdminNav';
import AdminDonation from '@/components/AdminDonation'
import { useEffect, useState } from 'react';

export default function Donation() {
    const [donations, setDonations] = useState([])
    useEffect(() => {
        getDonations()
    }, [])
    const getDonations = async () => {
        const data = await fetch('/api/donations', {method: "GET", headers: {'Content-Type': 'application/json'}})
        const res = await data.json()
        setDonations(res)
        console.log("Donations ", donations)
    }
    return (
        <>
            <Head>
                <title>Admin</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>

            <div className="flex bg-[#f8f9f8] w-full">
                <AdminNav />

                <div className="content py-12 px-20 w-full">
                    <h1 className="font-gilroy text-2xl">Donation Something</h1>
                    <div className="relative my-4 flex w-full flex-wrap items-stretch">
                        <input
                            name="search"
                            type="search"
                            className="relative w-96 rounded-l border border-solid border-neutral-300 bg-white px-3 py-[0.25rem] outline-none text-neutral-700 transition duration-200 ease-in-out focus:border-[#d3d5d7] focus:text-neutral-700 focus:outline-none"
                            placeholder="Search.."
                        />

                        <button className="relative flex items-center rounded-r bg-[#8b9197] px-6 py-2.5 hover:bg-[#7f848a]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="h-5 w-5">
                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {
                        donations.map((donation) => 
                           (<AdminDonation {...donation} key={donation.id}/>)
                        )
                    }
                </div>
            </div>
        </>
    );
}
