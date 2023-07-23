import Link from "next/link";
import useScrollPosition from '@/hooks/useScrollPosition';
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import React, { useState, useContext, useEffect } from "react";
import {signIn, signOut, useSession} from 'next-auth/react';
import {
  Input,
  Typography,
  Tabs,
} from "@material-tailwind/react";
import {
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import Donate from "./Donate";
import { useRouter } from "next/router";

function formatCardNumber(value) {
  const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const matches = val.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

function formatExpires(value) {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/^([2-9])$/g, "0$1")
    .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
    .replace(/^0{1,}/g, "0")
    .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).\*/g, "$1/$2");
}

const Navbar = () => {
  
  const router = useRouter()

  // console.log(router.pathname, router.asPath)

  // Get session data from NextAuth, see https://next-auth.js.org/getting-started/client#usesession
  // Session has user object with {name, email...} 
  // Can use status to check if a user is authenticated. Status can be {"authenticated", "unauthenticated"}
  const {data: session, status} = useSession() // need to import this hook if the user session is required

  // console.log("session", session, "status ", status) // browser debugging, also renders server side for some reason

  useEffect(() => {
        if(router.asPath.includes('callbackUrl') && router.asPath.includes('admin')){
        // console.log("session ", session)

          if(session === null) {
            alert('Unauthorized access. Please log in.')
          }
          
          if(session?.user?.role === "USER") {
            alert('Unauthorized access. Please log in with an admin account.')
          }
      }
  }, [session])
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


    useEffect(() => {


    if(router.asPath.includes('adopt') && status === "unauthenticated"){
      if (scrollPosition > 600 ) {
        window.my_modal_1.close()
        window.my_modal_1.showModal()
      }
      // alert(scrollPosition)

    }

  }, [scrollPosition])

  // const { open, loggedIn } = useContext(something);

  const handleSignIn = async (e) => {
    e.preventDefault()
    const result = await signIn('credentials', {
      email, password,
      redirect: "/"
    })
    // console.log("result ", result)
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    
    // This route returns a message object and status codes 201 and 400
    const result = await fetch(`/api/user/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      });
      // console.log(result)
      const body = await result.json()
      // console.log(body)
      alert(body.message)
      setName("")
      setEmail("")
      setPassword("")
      router.replace("/")

  }

    
  return <div className={classNames("navbar", scrollPosition > 0 ? 'bg-white shadow' : 'bg-transparent', 'sticky top-0 z-20 transition-all')}>
    <div className="navbar-start ml-4">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
      <div className="logo w-[8vw]">
        <img src="../logo.png" />
      </div>
    </div>
    <div className="navbar-center hidden lg:flex font-aristotelica pt-2 ">
      <ul className="menu menu-horizontal gap-16 px-1 text-xl">
        <Link href="/">
          <li className="ease-in duration-150 hover:text-[#C5996C]">Home</li>
        </Link>
        <Link href="/about">
          <li className="ease-in duration-150 hover:text-[#C5996C]">About</li>
        </Link>
        <Link href="/cats">
          <li className="ease-in duration-150 hover:text-[#C5996C]">Cats</li>
        </Link>
        <Link href="/purrmate">
          <li className="ease-in duration-150 hover:text-[#C5996C]">Purrmate</li>
        </Link>
        <Link href="/adopt">
          <li className="ease-in duration-150 hover:text-[#C5996C]">Adopt</li>
        </Link>
      </ul>
    </div>

    <div className="navbar-end font-aristotelica space-x-4 mr-4">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#C5996C" stroke="none">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </label>

        {/*start*/}
        {/* Based doon sa testing stuff na nakalagay dito initially */}
        {status ===  "authenticated" ? (
          <h1> {session.user.name} </h1>
        ) : (
          <h2> Login </h2>
        )}
        
        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-white shadow-xl">
          <div className="card-body">
            <div className="card-actions">
              {/* Show logout button if authenticated */}
              {
                status === "authenticated" ? (<>
                
                <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-xl text-white font-gilroy btn-block rounded-md"
                onClick={signOut}>Logout</button>
                
                <Link href="/tracking" className="w-full">
                      <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-xl text-white font-gilroy btn-block rounded-md">Track Status</button>
                    </Link>
                </>) 
                :
                (
                  <>
                  <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-xl text-white font-gilroy btn-block rounded-md"
                    onClick={() => window.my_modal_1.showModal()}>Login</button>
                    <dialog id="my_modal_1" className="modal">
                      <form method="dialog" className="modal-box bg-white w-auto">
                        <button className="btn btn-sm btn-circle btn-ghost absolute text-[#4B4B4B] right-2 top-3" onClick={()=> window.my_modal_1.close()}>✕</button>
                        <div className="signin p-5">
                          <div className="text-center">
                            <h1 className="font-bold text-[#4B4B4B] font-gilroy text-4xl">Login</h1>
                            <h2 className="font-gilroyLight text-[#4B4B4B] text-lg py-5">Sign in with your email and password</h2>
                          </div>

                          <div className="flex flex-col justify-center place-items-center space-y-5 pt-3 font-gilroyLight pb-10">
                            <div className="w-full">
                              <Input label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="w-full">
                              <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                          </div>
                          <Link href="/" className="">
                            <button className="grid h-11 w-80 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white text-lg font-gilroy font-bold rounded-md place-content-center" 
                            onClick={(e) => handleSignIn(e)}
                            >
                              Login
                            </button>
                          </Link>

                        <span className="pt-8 font-gilroyLight">Don&apos;t have an account? <button className="underline text-[#C5996C]" onClick={() => window.my_modal_2.showModal()}>
                          Register </button> instead</span>
                        </div>
                      </form>
                    </dialog>
                    <button className="bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-xl text-white font-gilroy btn-block rounded-md"
                      onClick={() => window.my_modal_2.showModal()}>Register</button>
                    <dialog id="my_modal_2" className="modal">
                      <form method="dialog" className="modal-box bg-white w-auto">
                        <button className="btn btn-sm btn-circle btn-ghost absolute text-[#4B4B4B] right-2 top-3" onClick={()=> window.my_modal_2.close()}>✕</button>
                        <div className="signin p-5">
                          <div className="text-center">
                            <h1 className="font-gilroy text-[#4B4B4B] text-4xl">Sign up</h1>
                            <h2 className="font-gilroyLight text-[#4B4B4B] text-lg py-5">Register and Create an Account</h2>
                          </div>

                          <div className="flex flex-col justify-center place-items-center space-y-5 font-gilroyLight">
                            <Input size="lg" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            {/* Potentially problematic to use same email and password state for register and login inputs */}
                            <Input size="lg" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Input type="password" size="lg" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Typography variant="small" color="gray" className="flex place-self-start gap-1 font-normal mt-2">
                              <InformationCircleIcon className="w-4 h-4 -mt-px" />
                              Use at least 8 characters.
                            </Typography>

                            <Link href="/">
                              <button className="grid h-11 w-[26rem] bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white text-lg font-gilroy font-bold rounded-md place-content-center"
                              onClick={(e) => handleRegister(e)}
                              
                              >
                                Register
                              </button>
                            </Link>
                          </div>
                          <span className="pt-8 font-gilroyLight">Already have an account? <button className="underline text-[#C5996C]" onClick={() => window.my_modal_1.showModal()}>
                          Login </button> instead</span>
                        </div>
                      </form>
                    </dialog>
                    
                  </>
                )
              }
            </div>
          </div>
        </div>
        {/*end*/}
        {/*user logged in*/}
      </div>
    </div>

    <Donate />
  </div>
};

export default Navbar