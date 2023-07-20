import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Radio } from "@material-tailwind/react";
import { useEffect, useState } from 'react';

export default function Adopt() {
    const [cats, setCats] = useState([])
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
                <title>Adopt</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>

            <Navbar />

            <div className="hero min-h-screen flex relative" style={{ backgroundImage: 'url(/h5.png)' }}>
                <div className="header flex-1">
                    <div className="content-left  pl-28 pb-60 w-[50rem]">
                        <h1 className="text-6xl font-gilroy">
                            Found the <span className="text-[#C5996C]">one</span> <br />
                            for <span className="text-[#C5996C]">you?</span>
                        </h1>
                        <h2 className="py-6 xl:text-2xl lg:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim tristique molestie. Praesent congue aliquam dui, vitae imperdiet dolor porta at
                        </h2>
                    </div>
                </div>
            </div>

            <div className="my-28">
                <div className="content w-full justify-center items-center mx-auto flex flex-col">
                    <h3 className="text-xl font-thin text-[#a3a3a1] text-center pb-5">APPLICATION</h3>
                    <h1 className="text-5xl font-gilroy text-center">
                        <span className="text-[#C5996C]">Fill</span> up the form and<br />
                        <span className="text-[#C5996C]">submit</span> it to us
                    </h1>

                    <div className="form w-[71rem] pt-20">
                        <label className="label">
                            <span className="label-text">Pick the cat you want to adopt</span>
                        </label>
                        <select className="select bg-gray-100 w-[34rem] mb-5">
                            <option disabled selected>Select</option>
                            {/* TODO */}
                            <option>Cat1</option>
                            <option>Cat2</option>
                            <option>Cat3</option>
                        </select>

                        <hr />

                        <div className="form-control flex my-5">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <div className="name flex mb-5 space-x-12">
                                <div className="grid">
                                    <input type="text" placeholder="First Name" className="input bg-gray-100 w-[34rem]" />
                                </div>

                                <div className="grid">
                                    <input type="text" placeholder="Last Name" className="input bg-gray-100 w-[34rem]" />
                                </div>
                            </div>

                            <div className="address mb-5">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" className="input bg-gray-100 w-full" />
                            </div>

                            <div className="name flex mb-5 space-x-12">
                                <div className="grid">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" className="input bg-gray-100 w-[34rem]" />
                                </div>

                                <div className="grid">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" className="input bg-gray-100 w-[34rem]" />
                                </div>
                            </div>

                            <div className="name flex mb-5 space-x-12">
                                <div className="grid">
                                    <label className="label">
                                        <span className="label-text">Occupation</span>
                                    </label>
                                    <input type="text" placeholder="Type N/A if unemployed" className="input bg-gray-100 w-[34rem]" />
                                </div>

                                <div className="grid">
                                    <label className="label">
                                        <span className="label-text">Have you adopted before?</span>
                                    </label>
                                    <div className="flex gap-10">
                                        <Radio id="yes" name="type" label="Yes" />
                                        <Radio id="no" name="type" label="No" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="form-control my-5">
                            <label className="label">
                                <span className="label-text">Describe your ideal pet, including its sex, age, appearance, temperament, etc</span>
                            </label>
                            <textarea className="textarea textarea-bordered bg-gray-100 h-24"></textarea>
                        </div>

                        <div className="name flex mb-5 space-x-[21rem]">
                            <div className="grid">
                                <label className="label">
                                    <span className="label-text">What type of building do you live in?</span>
                                </label>
                                <div className="flex gap-10">
                                    <div className="grid">
                                        <Radio id="house" name="type" label="House" />
                                        <Radio id="apartment" name="type" label="Apartment" />
                                    </div>

                                    <div className="grid">
                                        <Radio id="condo" name="type" label="Condo" />
                                        <Radio id="other" name="type" label="Other" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid">
                                <label className="label">
                                    <span className="label-text">Do you rent?</span>
                                </label>
                                <div className="flex gap-10">
                                    <Radio id="yes" name="type" label="Yes" />
                                    <Radio id="no" name="type" label="No" />
                                </div>
                            </div>
                        </div>
                        <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-gilroy px-12 py-3 rounded-full">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}