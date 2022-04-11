import React from "react"
import Router  from './routes/Router'
import { createGlobalStyle } from "styled-components"

const App = () => {

const GlobalStyle = createGlobalStyle`
   * {
     margin: 0;
     padding: 0;
     text-align: center;
   }

body{ background-image: url('http://cdn26.us1.fansshare.com/photo/pcwallpapers/seychelles-beautiful-beach-hd-wallpaper-pc-hd-wallpapers-515455447.jpg')}
`

  return (
    <>
      
      <Router/>
      <GlobalStyle/>
    </>
  )
}

export default App
