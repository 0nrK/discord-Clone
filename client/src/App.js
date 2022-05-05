import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { useState } from 'react'
import { useSelector } from 'react-redux'


const App = () => {

  const [data, setData] = useState([]);

  const user = useSelector((state) => state.user)


  useEffect(() => {
  }, []);

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App