import React from 'react'
import Chat from '../components/Chat'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'
import Login from "./Login"
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {


    const [data, setData] = useState([])
    const [time, setTime] = useState(Date.now());


    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {



        if (!user) return navigate("/login")



        axios.get("http://localhost:5000/api/message")
            .then((res) => setData(() => res.data))
            .catch((err) => console.log(err))

    }, [])

    return (
        <>
            <div className="flex flex-2  flex-row w-full max-h-full bg-red-100">
                <Nav />
                <Sidebar props={data} />
                <div className="grow">
                    <Chat props={data} />

                </div>
            </div>

        </>
    )
}

export default Home