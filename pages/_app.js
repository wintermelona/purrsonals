"use client"
import { useState } from "react";
import UserContext from "../components/UserContext"
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  const [trackNum, setTrackNum] = useState({
    chosen_need: 0,
    chosen_want: 0,
    chosen_type: 0,
  });

  const [trackState, setTrackState] = useState(0);

  return (
    <SessionProvider session={pageProps.session}>
      <UserContext.Provider
        value={{ trackNum, setTrackNum, trackState, setTrackState }}
      >
        <Component {...pageProps} />
      </UserContext.Provider>
    </SessionProvider>
  );
}

export default MyApp