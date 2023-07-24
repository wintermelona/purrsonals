import Head from 'next/head';
import Link from 'next/link';
//import Start from './purrmate/start'
import React from 'react'
import { useParams } from "react-router-dom";
import Quiz from "./purrmate/quiz"
import UserContext from "../components/UserContext";
import {useContext} from "react";


const questions = {
    "quiz": <Quiz />,
}


export default function App() {
    
    const {trackNum, setTrackNum} = useContext(UserContext)

    const {trackState, setTrackState} = useContext(UserContext)

    function updateNeed(){
        setTrackNum(() => {
            return{
                chosen_need : 0,
                chosen_want : 0,
                chosen_type : 0
            }
        })

        setTrackState(0)
    }
    const { id } = useParams();
    return (
        <>
            <Head>
                <title>Purrmate</title>
                <link rel="icon" href="/small-logo.png" />
            </Head>

            <div className="hero min-h-screen flex relative">
                <div className="img absolute bottom-0 left-0">
                    <img src="/q3.png" style={{ width: '70vh', objectFit: 'cover' }}  />
                </div>

                <div className="flex h-screen w-screen" >
                    <div className="grid w-96 bg-[#9CBE63]">
                        <Link href="/">
                            <img className="m-5 rounded-full hover:shadow-xl" src="/return-icon.png" onClick={updateNeed()}/>
                        </Link>
                    </div>

                    <div className="grid w-full bg-[#f0f7ed]">
                        <div className="recommender-content ml-64 my-64">
                            {questions[id]
                                ? <>
                                    {questions[id]}
                                </>
                                : <div className="quiz-start-container">
                                    <h1 className='quiz-start-header font-gilroy text-4xl text-[#c4996d]'>Purrmate</h1>
                                    <p className='quiz-start-description text-2xl my-2 mb-4'>We are so excited to know you and suggest you companion
                                    <br /> that's just for you!</p>
                                    <Link href="/purrmate/quiz">
                                       <button className="button w-48 h-14 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white text-2xl font-gilroy rounded-full " onClick={updateNeed()}>Start</button>
                                        </Link> 
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
