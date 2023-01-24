import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'

const Index = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default Index;