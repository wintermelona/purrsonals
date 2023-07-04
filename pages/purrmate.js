import Head from 'next/head';
import Link from 'next/link';
//import Start from './purrmate/start'
import React from 'react'
import { useParams } from "react-router-dom";
import Start from "./purrmate/start"
import Need from "./purrmate/need"


const questions = {
    "need": <Need />,
  }

export default function App() {
    const { id } = useParams();
    return (
        <>
            <Head>
                <title>Purrmate</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>
            <div className="hero min-h-screen flex relative">
                <div className="img absolute bottom-0 left-0">
                    <img src="/q3.png" style={{ width: '70vh', objectFit: 'cover' }} />
                </div>

                <div className="flex h-screen w-screen" >
                    <div className="grid w-96 bg-[#9CBE63]">
                        <Link href="/">
                            <img className="m-5 rounded-full hover:shadow-xl" src="/return-icon.png" />
                        </Link>
                    </div>
                    <div className="grid w-full place-items-center bg-[#f0f7ed]">
                        <div className="recommender-content flex justify-center items-center place-items-center ">
                        { questions[id] 
                            ? <>
                                {questions[id]}
                            </> 
                            : <Start />
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
