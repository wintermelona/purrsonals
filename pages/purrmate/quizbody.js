import React, { useContext } from 'react'
import UserContext from "../../components/UserContext";
import Determiner from "./determiner"
import Link from 'next/link';

const QuizBody = ({
    index = 0,
    label = "",
    choices = [],
    nextQuestion = "",
}) => {

    const { trackNum, setTrackNum } = useContext(UserContext)

    const { trackState, setTrackState } = useContext(UserContext)


    //Update trackstate, tracks how many inputs the user have
    function updateState(num) {
        if (num < 0) {
            console.log("Nope")
        }
        else {
            setTrackState(num)
        }
    }

    //Gets user choice and save it 
    function updateNavigator(updateNum, num) {
        if (updateNum === 0) {
            updateNeed(num)
        }

        else if (updateNum === 1) {
            updateWant(num)
        }

        else if (updateNum === 2) {
            updateType(num)
        }

        else {
            console.log("Hi")
        }
    }

    function updateNeed(num) {
        setTrackNum((prevState) => {
            return {
                ...prevState,
                chosen_need: num
            }
        })
    }

    function updateWant(num) {
        setTrackNum((prevState) => {
            return {
                ...prevState,
                chosen_want: num
            }
        })
    }

    function updateType(num) {
        setTrackNum((prevState) => {
            return {
                ...prevState,
                chosen_type: num
            }
        })
    }

    if (trackState != 3) {
        return (
            <div className="quiz-main-container">
                <div className="header-container">
                    <h1 className="main-header">Looking for your Purrmate..</h1>
                </div>

                <div className="question my-5">
                    <p className="font-gilroy text-4xl text-[#c4996d]">{label}</p>
                </div>

                <div className="question-container">
                    {choices.map((choice, i) => {
                        return <a to="/purrmate/need" className="question-box" key={i + choice} onClick={() => {
                            updateState(trackState + 1);
                            updateNavigator(trackState, i);
                        }}>
                            <div className="choices mr-44">
                                <div className="my-6">
                                    <button className="pl-8 w-full h-14 border-solid border-[1px] border-gray-600 rounded-full text-2xl text-left ease-in duration-150 hover:bg-[#c4996d] hover:text-white hover:border-0 ">{choice}</button>
                                </div>
                            </div>
                        </a>
                    })}
                </div>
            </div>
        )
    }

    else {
        let values = Determiner()
        let treatmentArray = [...values[4]]
        let descArray = [...values[5]]
        let imageArray = [...values[6]]

        let displayImages = imageArray.map((imagePath, index) => (
            <img src={imagePath} key={index} alt={`Image ${index}`} className="w-28 h-28 rounded-xl" />
        ));



        let displayTreatment = treatmentArray.map(object => {
            return (
                <h2 className='font-gilroy text-7xl text-[#c4996d]'>{object}!</h2>
            )
        });

        return (
            <div className="quiz-main-container mr-56">
                <h1 className='font-junge text-[24px] text-[#343434]'>Your perfect companion is..</h1>
                <div className="flex gap-6 items-center mt-3">
                    {displayImages}
                    {displayTreatment}
                </div>
                <div className="desc w-full mt-4 mb-6 text-2xl">
                    {descArray}
                </div>
                <div className="flex gap-2">
                    
                    <Link href="/adopt">
                        <button className="button w-48 h-14 bg-[#C5996C] ease-in duration-150 hover:bg-[#9A7856] text-white text-2xl font-gilroy rounded-full " onClick={() => { }}>Adopt</button>
                    </Link>
                    <Link href="/purrmate">
                        <button className="button w-48 h-14 bg-transparent ease-in duration-150 hover:bg-[#9A7856] text-[#C5996C] hover:text-white border border-[#C5996C] text-2xl font-gilroy rounded-full " onClick={() => { }}>Try again</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default QuizBody