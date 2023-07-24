import Head from 'next/head';
import Link from 'next/link';
//import Start from './purrmate/start'
import React from 'react'
import { useParams } from "react-router-dom";
import Start from "./purrmate/start"
import Quiz from "./purrmate/quiz"


const questions = {
    "quiz": <Quiz />,
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
                    
                    <div className="grid w-full bg-[#f0f7ed]">
                        <div className="recommender-content ml-64 my-32 mr-20 ">
                            {questions[id]
                                ? <>
                                    {questions[id]}
                                </>
                                : <div className="quiz-start-container">
                                    <h1 className='quiz-start-header font-gilroy text-4xl'>PURRMATE</h1>
                                    <p className='quiz-start-description'>We are so excited to know you and suggest you companion <br />
                                        that's just for you!</p>
                                    <a href="/purrmate/quiz" className="!translate-y-1/2 btn w-[215px] h-[58px] border border-[#000] border-opacity-25 bg-[#ff8644] hover:bg-[#fe7529] 
                                hover:border-[#fe7529] text-white text-[27.5px] hover:shadow-lg font-jacques font-normal normal-case py-2 px-4 rounded-full " onClick={() => { }}>Start</a>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
