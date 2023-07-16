import Head from 'next/head';
import AdminNav from '@/components/AdminNav';
import { Input } from "@material-tailwind/react";

export default function dashboard() {
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
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/20230630_Huh_Yun-jin_%28LE_SSERAFIM%29.jpg" />
                                    </div>
                                </div>
                                <input type="file" className="file-input file-input-bordered file-input-sm w-[7.5rem] max-w-xs" />
                            </div>


                            <div className="grid flex-grow card gap-6">
                                <div className="name flex pb-5 space-x-12">
                                    <Input variant="static" label="First Name" placeholder="fn" />
                                    <Input variant="static" label="Last Name" placeholder="ln" />
                                </div>
                                
                                <Input variant="static" label="Something" placeholder="fn" />

                                <div className="divider" />
                                <Input variant="static" label="Email" placeholder="em" />
                                <button className="border-0 bg-[#a3a6b7] ease-in duration-150 hover:bg-[#9093a1] text-md text-white font-gilroyLight normal-case h-8 w-40 rounded-md" onClick={() => window.my_modal_5.showModal()}>
                                    Change Password</button>
                                <dialog id="my_modal_5" className="modal">
                                    <form method="dialog" className="modal-box bg-white w-auto">
                                        <button className="btn btn-sm btn-circle btn-ghost text-[#4B4B4B] absolute right-2 top-2">✕</button>
                                        <h1 className="text-[#4B4B4B] text-sm">Change Password</h1>
                                        <div className="w-72 my-5">
                                            <Input type="password" label="Current Password" />
                                        </div>

                                        <div className="divider" />

                                        <div className="w-72 mb-5">
                                            <Input type="password" label="New Password" />
                                        </div>

                                        <div className="w-72 mb-5">
                                            <Input type="password" label="Confirm Password" />
                                        </div>

                                        <button className="border-0 bg-[#a3a6b7] ease-in duration-150 hover:bg-[#9093a1] text-md text-white font-gilroyLight normal-case h-8 w-full rounded-md">
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
