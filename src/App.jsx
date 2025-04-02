import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Components/Footer/Footer'
import Layout from './Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Layout/>
      <Footer/>
     
    </div>
    </>
  )
}

export default App
