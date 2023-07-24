import React from 'react'
import QuizBody from './quizbody'
import Determiner from "./determiner"
import Link from 'next/link';

function Quiz() {
  const values = Determiner()
  return (
    <div>
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
            <QuizBody index={values[0]} label={values[2]} choices={values[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Quiz;