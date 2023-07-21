import Head from 'next/head';
import AdminNav from '@/components/AdminNav';
import { Input } from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

export default function Dashboard() {

    useEffect(() => {
      getAdminSession()
    }, [])

    async function getAdminSession() {
        const session = await getSession()
        console.log(" admin in session ", session);
        setName(session?.user?.name)
        setEmail(session?.user?.email)
        setBio(session?.user?.bio)
        setImage(session?.user?.image)
        return session
    }
    
    // Name lang yung nasa initial user register, kaya name lang din nasa db
    const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [imageFile, setImageFile] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const formHandler = async () => {

        const formData = new FormData();
        formData.append("name", name);
        // formData.append("lastname", lastName);
        formData.append("bio", bio);
        formData.append("email", email);
        formData.append("image", imageFile);

        console.log("image", imageFile)

        const result = await fetch('/api/user/profile', {
            method: "PATCH",
            body: formData
        })

        getAdminSession() // Fetches session again, session data is stale
    }

    const passwordChangeHandler = async () => {
        
        let result = await fetch('/api/user/changePassword', {
            method: "PATCH",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                    email,
                    password: currentPassword,
                    newPassword,
                    confirmPassword
                }
            )
        })

        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
        result = await result.json()
        alert(result.message) // Idk if you wanna have diff alerts here pero pwedee, yung server is magssend ng messages
    }

    function changeImageHandler(file) {
        console.log("Event path", file)
        setImageFile(file)
        setImage(URL.createObjectURL(file))
    }

    return (
        <>
            <Head>
                <title>Admin</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>

            <div className="flex bg-[#f8f9f8] w-full">
                <AdminNav />

                <div className="content my-20 mx-28 w-full">
                    <div className="card bg-white p-10 flex w-full" style={{ boxShadow: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)' }}>
                        <div className="flex w-full gap-10">
                            <div className="flex flex-col w-56 place-items-center gap-2">
                                <div className="avatar h-40">
                                    <div className="w-40 rounded-full">
                                        <img src={image} />
                                    </div>
                                </div>
                                <input type="file" className="file-input file-input-bordered file-input-sm w-[7.5rem] max-w-xs" value={""} onChange={(e) => changeImageHandler(e.target.files[0])} />
                            </div>


                            <div className="grid flex-grow card gap-6">
                                <div className="name flex pb-5 space-x-12">
                                    <Input variant="static" label="Name" placeholder="fn" value={name} onChange={(e) => setName(e.target.value)}/>
                                    {/* <Input variant="static" label="Last Name" placeholder="ln" value={lastName} onChange={(e) => setLastName(e.target.value)}/> */}
                                </div>
                                
                                <Input variant="static" label="Bio" placeholder="Enter your bio here..." value={bio} onChange={(e) => setBio(e.target.value)}/>

                                <div className="divider" />
                                <Input variant="static" label="Email" placeholder="em" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                {/* Parang medj problematic sha if magkasama yung save ng profile and 
                                yung pag change ng pass kaya sineparate ko 
                                Di ko na nastyle hehi
                                */}
                                <button className="border-0 bg-[#a3a6b7] ease-in duration-150 hover:bg-[#9093a1] text-md text-white font-gilroyLight normal-case h-8 w-40 rounded-md" 
                                onClick={formHandler}
                                >
                                Save</button>
                                <button className="border-0 bg-[#a3a6b7] ease-in duration-150 hover:bg-[#9093a1] text-md text-white font-gilroyLight normal-case h-8 w-40 rounded-md" onClick={() => window.my_modal_5.showModal()}>
                                    Change Password</button>
                                <dialog id="my_modal_5" className="modal">
                                    <form method="dialog" className="modal-box bg-white w-auto">
                                        <button className="btn btn-sm btn-circle btn-ghost text-[#4B4B4B] absolute right-2 top-2">✕</button>
                                        <h1 className="text-[#4B4B4B] text-sm">Change Password</h1>
                                        <div className="w-72 my-5">
                                            <Input type="password" label="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}/>
                                        </div>

                                        <div className="divider" />

                                        <div className="w-72 mb-5">
                                            <Input type="password" label="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                                        </div>

                                        <div className="w-72 mb-5">
                                            <Input type="password" label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                        </div>

                                        <button className="border-0 bg-[#a3a6b7] ease-in duration-150 hover:bg-[#9093a1] text-md text-white font-gilroyLight normal-case h-8 w-full rounded-md"
                                        onClick={passwordChangeHandler}
                                        >
                                            Save</button>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
