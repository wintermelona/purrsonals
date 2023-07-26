import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Radio } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Adopt() {
    const router = useRouter()

    const [cats, setCats] = useState([])
    const [adoptee, setAdoptee] = useState("") // Selected cat
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [occupation, setOccupation] = useState("")
    const [history, setHistory] = useState(false)
    const [description, setDescription] = useState("")
    const [buildingType, setBuildingType] = useState("")
    const [renting, setRenting] = useState(false)

    useEffect(() => {
        getCats()
        getUserEmail()
    }, [])

    // Could put this in a context provider
    const getCats = async () => {
        // e.preventDefault()
        const result = await fetch(`/api/cats`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        // console.log(result)
        const catsInDb = await result.json()
        // console.log("cats ", catsInDb, "type ", typeof catsInDb)
        setCats(catsInDb)
        // console.log("cats[0] ", catsInDb[0])
        setAdoptee(catsInDb[0]?.name)

    }
    const addApplication = async (id, status) => {
        // console.log('STATUS, ', status)
        const data = await fetch(`/api/application/`, { method: "POST", headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstname:firstName,
                lastname: lastName,
                adoptee,
                address,
                phone,
                email,
                occupation,
                adoption: history,
                description,
                renting,
                buildingType,
                // status: "Pending",
            })
        })
        const res = await data.json()
        alert(res.message)
        setAdoptee("")
        setFirstName("")
        setLastName("")
        setAddress("")
        setPhone("")
        setEmail("")
        setOccupation("")
        setHistory("")
        setDescription("")
        setBuildingType("")
        setRenting("")
        router.replace("/adopt")
        // console.log(res)
    }

    async function getUserEmail() {
        const session = await getSession()
        setEmail(session?.user?.email || "")
        // console.log("EMAIL ", email);
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
                        <select className="select bg-gray-100 w-[34rem] mb-5" value={adoptee} onChange={(e) => setAdoptee(e.target.value)}>
                            <option disabled value={"select"}>Select</option>
                            {
                                cats.map((cat, index) => (<option key={index} value={cat.name} >{cat.name}</option>))
                            }
                        </select>
                            


                        <hr />

                        <div className="form-control flex my-5">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <div className="name flex mb-5 space-x-12">
                                <div className="grid">
                                    <input type="text" placeholder="First Name" className="input bg-gray-100 w-[34rem]" 
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className="grid">
                                    <input type="text" placeholder="Last Name" className="input bg-gray-100 w-[34rem]" 
                                    value={lastName} onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="address mb-5">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" className="input bg-gray-100 w-full" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>

                            <div className="name flex mb-5 space-x-12">
                                <div className="grid">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" className="input bg-gray-100 w-[34rem]" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                </div>

                                <div className="grid">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" className="input bg-gray-100 w-[34rem]" disabled value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>

                            <div className="name flex mb-5 space-x-12">
                                <div className="grid">
                                    <label className="label">
                                        <span className="label-text">Occupation</span>
                                    </label>
                                    <input type="text" placeholder="Type N/A if unemployed" className="input bg-gray-100 w-[34rem]" 
                                    value={occupation} onChange={(e) => setOccupation(e.target.value)}/>
                                </div>

                                <div className="grid">
                                    <label className="label">
                                        <span className="label-text">Have you adopted before?</span>
                                    </label>
                                    <div className="flex gap-10">
                                        <Radio id="yes" name="history" label="Yes" onClick={() => setHistory(true)} />
                                        <Radio id="no" name="history" label="No" onClick={() => setHistory(false)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className="form-control my-5">
                            <label className="label">
                                <span className="label-text">Describe your ideal pet, including its sex, age, appearance, temperament, etc</span>
                            </label>
                            <textarea className="textarea textarea-bordered bg-gray-100 h-24" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>

                        <div className="name flex mb-5 space-x-[21rem]">
                            <div className="grid">
                                <label className="label">
                                    <span className="label-text">What type of building do you live in?</span>
                                </label>
                                <div className="flex gap-10">
                                    <div className="grid">
                                        <Radio id="house" name="building" label="House" onClick={() => setBuildingType("HOUSE")}/>
                                        <Radio id="apartment" name="building" label="Apartment" onClick={() => setBuildingType("APARTMENT")} />
                                    </div>

                                    <div className="grid">
                                        <Radio id="condo" name="building" label="Condo" onClick={() => setBuildingType("CONDO")} />
                                        <Radio id="other" name="building" label="Other" onClick={() => setBuildingType("OTHER")} />
                                    </div>
                                </div>
                            </div>

                            <div className="grid">
                                <label className="label">
                                    <span className="label-text">Do you rent?</span>
                                </label>
                                <div className="flex gap-10">
                                    <Radio id="yes2" name="renting" label="Yes" onClick={() => setRenting(true)}/>
                                    <Radio id="no2" name="renting" label="No" onClick={() => setRenting(false)}/>
                                </div>
                            </div>
                        </div>
                        <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white font-gilroy px-12 py-3 rounded-full" 
                        onClick={addApplication}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}