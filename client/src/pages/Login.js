import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { login } from '../redux/userSlice';

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem("user"))

    function handleChange(e) {
        setLoginData((loginData) => ({
            ...loginData,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(login(loginData))
    }

    useEffect(() => {
        if (user) return navigate("/");
    }, [user])
    return (
        <div className="backgroundImg pt-24   min-h-screen   flex flex-col   w-full items-center ">
            <div className=" w-1/3 space-y-3 bg-slate-700 p-3 px-8 rounded-lg">
                <h1 className="text-4xl font-bold pt-8  text-gray-200 text-center">Welcome Back!</h1>
                <h3 className="text-sm font-bold  text-gray-200 text-center">
                    This project is a clone.
                </h3>

                <form onChange={handleChange} className="flex flex-col  space-y-3 h-auto w-full text-gray-200 ">
                    <label htmlFor="email" className="">EMAIL</label>
                    <input className="bg-slate-800  outline-none rounded-md  p-3" type="email" name="email" />
                    <label htmlFor="password" className="">PASSWORD</label>
                    <input className="bg-slate-800 outline-none rounded-md p-3" type="password" name="password" />
                    <a className="text-blue-400">Forgot your password?</a>
                    <button onClick={handleSubmit} className="p-5  bg-blue-800 hover:bg-blue-700  rounded-lg">Continue</button>
                </form>
                <div className="py-3 space-x-3">
                    <Link to="/register" className="text-blue-400">Need an account?</Link>
                </div>
            </div >
        </div >
    )
}

export default Login