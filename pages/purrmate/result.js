import React from 'react'
import Determiner from "../determiner"

function Result(){
  let values = Determiner()
  let treatmentArray = [...values[4]]

    let displayTreatment = treatmentArray.map(object => {
        return(
            <h2 className='font-jacques text-[72px] text-[#FF8644]'>{object}</h2>
        )
    })
  return(
        <div className="quiz-main-container">
            <h1 className='font-junge text-[24px] text-[#343434]'>Recommended treatment:</h1>
            {displayTreatment}
            <a href="/start" className="!translate-y-1/2 btn w-[315px] h-[58px] border border-[#000] border-opacity-25 bg-[#ff8644] hover:bg-[#fe7529] hover:border-[#fe7529] text-white text-[27.5px] hover:shadow-lg font-jacques font-normal normal-case py-2 px-4 rounded-full ">Take another quiz</a>
          
        </div>
    )
}

export default Result