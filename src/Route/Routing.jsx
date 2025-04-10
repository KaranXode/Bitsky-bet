import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../Pages/Home';
import AccountScreen from './../Pages/Account';

export default function Routing() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/myaccount" element={<AccountScreen/>} />
      </Routes>
    </div>
  )
}
