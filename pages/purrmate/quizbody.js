import React, {useContext} from 'react'
import UserContext from "../../components/UserContext";
import Determiner from "./determiner"


const QuizProgress = ({ index = 0 }) => {
  //Changes active hex (Progess)
  const getCurrentStateIcon = (position, currentIndex) => {
    if (position <= currentIndex) {
      return "/images/current-state-icon.png";
    }
    return "/images/state-icon.png"
  }

  //Changes active arrow (Progess)
  const getArrowIcon = (position, currentIndex) => {
    if (position < currentIndex) {
      return "/images/current-arrow-line.png";
    } else if (position === currentIndex) {
      return "/images/current-arrow-icon.png"
    }
    return "/images/arrow-icon.png"
  }
  
  return <div className="progress-container">
    <div className="state-box">
        <img src={getCurrentStateIcon(0, index)} alt="state"/>
        <p className="state-number font-bold">1</p>
        <p>Need</p>
    </div>
    
    <div className="state-box">
        <img src={getCurrentStateIcon(1, index)} alt="state"/>
        <p className="state-number font-bold">2</p>
        <p>Want</p>
    </div>

    <div className="state-box">
        <img src={getCurrentStateIcon(2, index)} alt="state"/>
        <p className="state-number font-bold">3</p>
        <p>Type</p>
    </div>

    <div className="state-box">
        <img src={getCurrentStateIcon(3, index)} alt="state"/>
        <p className="state-number font-bold">4</p>
        <p>Plan</p>
    </div>

    <div className="arrow-box">
        <img className="arrow-icon" src={getArrowIcon(0, index)} alt="arrow"/>
        <img className="arrow-icon" src={getArrowIcon(1, index)} alt="arrow"/>
        <img className="arrow-icon" src={getArrowIcon(2, index)} alt="arrow"/>
    </div>
</div>
}

const QuizBody = ({
  index = 0,
  label = "",
  choices = [],
  nextQuestion = "",
}) => {

  const {trackNum, setTrackNum} = useContext(UserContext)

  const {trackState, setTrackState} = useContext(UserContext)
  

    //Update trackstate, tracks how many inputs the user have
    function updateState(num){
      if(num < 0){
          console.log("Nope")
      }
      else {
          setTrackState(num)
      }   
    }

    //Gets user choice and save it 
    function updateNavigator(updateNum, num){
      if (updateNum === 0){
          updateNeed(num)
      }
  
      else if (updateNum === 1){
          updateWant(num)
      }
  
      else if (updateNum === 2){
          updateType(num)
      }
  
      else if (updateNum === 3){
          updatePlan(num)
      }
  
      else {
          console.log("Hi")
      }
  }
  
  function updateNeed(num){
      setTrackNum((prevState) => {
          return{
              ...prevState,
              chosen_need : num
          }
      })
  }
  
  function updateWant(num){
      setTrackNum((prevState) => {
          return{
              ...prevState,
              chosen_want : num
          }
      })
  }
  
  function updateType(num){
      setTrackNum((prevState) => {
          return{
              ...prevState,
              chosen_type : num
          }
      })
  }
  
  function updatePlan(num){
      setTrackNum((prevState) => {
          return{
              ...prevState,
              chosen_plan : num
          }
      })
  }
    
    if (trackState != 4) {
    return (
        <div className="quiz-main-container">
            <div className="header-container">
                <h1 className="main-header">Looking for your treatment..</h1>
                <QuizProgress index={index} />
            </div>
          
            <div className="question"> 
              <p className="font-jacques font-bold text-[32px] color-[#343434]">{ label }</p>
            </div>

          <div className="question-container">
              {choices.map((choice, i) => {
                return <a to="/purrmate/need" className="question-box" key={i + choice} onClick={() => {
                  updateState(trackState+1);
                  updateNavigator(trackState, i);
                  }}>
                      <p>{ choice }</p>
                  </a>
              })}
              <a to="/purrmate/need" className="prev-button" onClick={() => {updateState(trackState-1); updateNavigator(trackState, 0)}}> 
                <img src={"/images/prev-icon.png"} alt="prev-arrow"
                /></a>
          </div>
      </div>
  )}

  else {
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
          <a href="../purrmate" className="!translate-y-1/2 btn w-[315px] h-[58px] border border-[#000] border-opacity-25 bg-[#ff8644] hover:bg-[#fe7529] hover:border-[#fe7529] text-white text-[27.5px] hover:shadow-lg font-jacques font-normal normal-case py-2 px-4 rounded-full ">Take another quiz</a>
        
      </div>
  ) 
  }
}

export default QuizBody