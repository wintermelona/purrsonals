"use client"
import { useState } from "react";
import UserContext from "../components/UserContext"
import '../styles/globals.css'
import "../styles/Quiz.module.css"


function MyApp({ Component, pageProps }) {
  const [trackNum, setTrackNum] = useState({
    chosen_need : 0,
    chosen_want : 0,
    chosen_type : 0,
    chosen_plan : 0
  })

  const [trackState, setTrackState] = useState(0)

  return(
      <UserContext.Provider value={{trackNum, setTrackNum, trackState, setTrackState}}>
        <Component {...pageProps} />
      </UserContext.Provider>
  )
}

export default MyApp