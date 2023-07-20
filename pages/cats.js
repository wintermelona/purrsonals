import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function Cats() {
    const [cats, setCats] = useState([])
    console.log("client ", cats)
    useEffect(() => {
        getCats()
    }, [])
    // console.log("client ", cats)

    const getCats = async () => {
        // e.preventDefault()
        const result = await fetch(`/api/cats`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        console.log(result)
        const catsInDb = await result.json()
        // console.log("cats ", catsInDb, "type ", typeof catsInDb)
        setCats(catsInDb)

    }

    return (
        <>
            <Head>
                <title>Cats</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>
            <Navbar />

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/h4.png)' }}>
                <div className="relative w-full h-[70%]">
                    <div className="absolute top-0 right-0 h-96 w-[48%]">
                        <div className="w-2/3">
                            <h1 className="xl:text-7xl lg:text-6xl font-gilroy">
                                <span className="text-[#C5996C]">Meet</span> the Cats
                            </h1>
                            <h2 className="py-6 xl:text-2xl lg:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue iaculis suscipit. Nulla facilisi.
                            </h2>
                        </div>
                        <div className="flex text-center space-x-12">
                            <div className="c1 w-32 h-32 rounded-3xl bg-white flex flex-col justify-center items-center" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.08)' }}>
                                <h1 className="mb-2 text-[#C5996C] text-5xl font-gilroy">XX</h1>
                                <p className="text-xl">Male</p>
                            </div>
                            <div className="c2 w-32 h-32 rounded-3xl bg-white flex flex-col justify-center items-center" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.08)' }}>
                                <h5 className="mb-2 text-[#C5996C] text-5xl font-gilroy tracking-tight">XX</h5>
                                <p className="text-xl">Female</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid of Cat Cards */}
            <div className="hero h-fit my-28">
                <div className="items-center">
                    <div className="grid grid-cols-3 gap-16 justify-center items-center">
                        {/* Cat Cards */}
                        {cats.map((cat, index) => (
                            <div key={index} className="relative block rounded-3xl h-[27rem] w-[22rem] bg-gray-900 group">
                                <img className="absolute inset-0 h-[27rem] w-[22rem] rounded-3xl group-hover:opacity-50" src={cat.image} />
                                <div className="relative p-10">
                                    <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                        <p className="text-md text-white text-justify pb-3">
                                            <span className="font-gilroy">Name: </span>{cat.name} <br />
                                            <span className="font-gilroy">Age: </span>{cat.age} <br />
                                            <span className="font-gilroy">Sex: </span>{cat.sex} <br />
                                        </p>
                                        <hr />
                                        <div className="text-md text-white text-justify py-3 h-56 overflow-y-auto no-scrollbar">
                                            {cat.description}
                                        </div>

                                        <div className="justify-end">
                                            <Link href="/adopt">
                                                <button className="w-full h-10 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-gilroy rounded-full">Adopt Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
