import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../redux/userSlice'



const Register = () => {

    const [regData, setRegData] = useState({
        email: "",
        username: "",
        password: "",
        password2: ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))

    function handleChange(e) {
        setRegData((regData) => ({
            ...regData,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (regData.password === regData.password2) {
            const { username, email, password } = regData
            dispatch(register({ username, email, password }))
        } else {
            console.log("something went wrong")
        }
    }

    useEffect(() => {

        if (user) return navigate("/")
    }, [user])

    return (
        <div className="backgroundImg pt-24 min-h-screen flex flex-col  w-full items-center ">
            <div className=" w-1/3 space-y-3 bg-slate-700 p-3 px-8 rounded-lg">
                <h1 className="text-4xl font-bold pt-8  text-gray-200 text-center">Create An Account</h1>
                <h3 className="text-sm font-bold  text-gray-200 text-center">
                    This project is a clone.
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col  space-y-3 h-auto w-full text-gray-200 ">
                    <label className="">EMAIL</label>
                    <input onChange={handleChange} className="bg-slate-800  outline-none rounded-md  p-3" type="email" name="email" />
                    <label className="">USERNAME</label>
                    <input onChange={handleChange} className="bg-slate-800 outline-none rounded-md p-3" type="text" name="username" />
                    <label className="">PASSWORD</label>
                    <input onChange={handleChange} className="bg-slate-800 outline-none rounded-md p-3" type="password" name="password" />
                    <label className="">PASSWORD2</label>
                    <input onChange={handleChange} className="bg-slate-800 outline-none rounded-md p-3" type="password" name="password2" />

                    <button type="submit" className="p-5  bg-blue-800 hover:bg-blue-700  rounded-lg">Continue</button>
                </form>
                <div className="py-2">
                    <Link to="/login" className="text-blue-400">Already have an account?</Link>

                </div>
            </div >
        </div >
    )
}

export default Register