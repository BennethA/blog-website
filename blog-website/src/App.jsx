import "./App.css"
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
