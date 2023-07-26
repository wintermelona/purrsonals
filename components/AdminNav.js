import Link from 'next/link';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Avatar,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { signOut, useSession } from 'next-auth/react';

const AdminNav = () => {
    const [adminName, setAdminName] = useState("");

    const {data: session, status} = useSession() // need to import this hook if the user session is required
    useEffect(() => {
        setAdminName(session?.user?.name)
    }, [])
    const handleSignOut = async (e) => {
    e.preventDefault()
    await signOut({ callbackUrl: 'http://localhost:3000/' })
  }


    return <div className="min-h-screen w-80 bg-[#141429]">
        <div className="flex nav-side px-16 py-12 flex-col justify-between h-full">
            <div>
                <div className="logo">
                    <img src="/admin-logo.png" className="w-10" />
                </div>

                <div className="text-[#a3a7b6] mt-8">
                    <div className="menu menu-vertical text-md">
                        <div className="flex items-center mb-3 space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
                            <Link href="/admin/cats">
                                <h3 className="ease-in duration-150 hover:text-white">Cats</h3>
                            </Link>
                        </div>

                        <div className="flex items-center mb-3 space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16"> <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" /> <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" /> </svg>
                            <Link href="/admin/applications">
                                <h3 className="ease-in duration-150 hover:text-white">Applications</h3>
                            </Link>
                        </div>

                        <div className="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 576 512"> <path d="M251.1 207.1C251.1 196.1 260.1 187.1 271.1 187.1H287.1C299 187.1 308 196.1 308 207.1V275.1H312C323 275.1 332 284.1 332 295.1C332 307 323 315.1 312 315.1H263.1C252.1 315.1 243.1 307 243.1 295.1C243.1 284.1 252.1 275.1 263.1 275.1H267.1V227.6C258.9 225.7 251.1 217.7 251.1 207.1zM48.66 79.13C128.4 100.9 208.2 80.59 288 60.25C375 38.08 462 15.9 549 48.38C565.9 54.69 576 71.62 576 89.66V399.5C576 423.4 550.4 439.2 527.3 432.9C447.6 411.1 367.8 431.4 288 451.7C200.1 473.9 113.1 496.1 26.97 463.6C10.06 457.3 0 440.4 0 422.3V112.5C0 88.59 25.61 72.83 48.66 79.13L48.66 79.13zM127.1 416C127.1 380.7 99.35 352 63.1 352V416H127.1zM63.1 223.1C99.35 223.1 127.1 195.3 127.1 159.1H63.1V223.1zM512 352V287.1C476.7 287.1 448 316.7 448 352H512zM512 95.1H448C448 131.3 476.7 159.1 512 159.1V95.1zM287.1 143.1C234.1 143.1 191.1 194.1 191.1 255.1C191.1 317.9 234.1 368 287.1 368C341 368 384 317.9 384 255.1C384 194.1 341 143.1 287.1 143.1z" /></svg>
                            <Link href="/admin/donation">
                                <h3 className="ease-in duration-150 hover:text-white">Donations</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Popover>
                <PopoverHandler>
                    <Button variant="outlined" className="rounded-full border-0 normal-case bg-transparent hover:bg-white/5 shadown-none flex gap-4 items-center w-52">
                        <Avatar src={session?.user?.image} alt="avatar" />
                        <div className="flex flex-col text-left text-md text-[#a3a6b7]">
                            <p className="font-gilroy">{adminName}</p>
                            <p className="font-gilroyLight">{session?.user?.role}</p>
                            {/*<p className="font-gilroyLight">{ status === "authenticated" ? "Authenticated": "Not Authenticated"}</p>*/}
                        </div>

                    </Button>
                </PopoverHandler>
                <PopoverContent className="w-44 h-18 p-2">
                    <ul className="menu p-0 font-gilroyLight">
                        <li><a href='/admin/profile'>Profile</a></li>
                        <li><button onClick={(e) => handleSignOut(e)}>Logout</button></li>
                    </ul>
                </PopoverContent>
            </Popover>

        </div>
    </div>
};
export default AdminNav
