import React from 'react'

const Start = () => {
    return (
        <div className="quiz-start-container">
            <h1 className='quiz-start-header font-gilroy text-4xl'>PURRMATE</h1>
            <p className='quiz-start-description'>We are so excited to know you and suggest you companion <br />
                that's just for you!</p>
            <a href="/purrmate/need" className="!translate-y-1/2 btn w-[215px] h-[58px] border border-[#000] border-opacity-25 bg-[#ff8644] hover:bg-[#fe7529] 
                hover:border-[#fe7529] text-white text-[27.5px] hover:shadow-lg font-jacques font-normal normal-case py-2 px-4 rounded-full " onClick={() => { }}>Start</a>
        </div>
    )
}

export default Start