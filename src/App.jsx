import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer/Footer'
import Layout from './Layout/Layout'
import Account from './Pages/Account'
import AccountScreen from './Pages/Account'
import ParallaxImage from './Components/ParallaxImage/ParallaxImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ParallaxImage/>
      <Layout/>
      <Footer/>
      {/* <AccountScreen/> */}
     
    </div>
    </>
  )
}

export default App
