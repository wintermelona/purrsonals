import React from 'react'
import QuizBody from './quizbody'
import Determiner from "./determiner"

function Quiz(){
   const values = Determiner()
    return(
        <div>
          <QuizBody index={values[0]} label={values[2]} choices={values[3]}/>
        </div>
    )
}

export default Quiz;