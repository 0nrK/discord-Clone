import React, { useRef, useState } from 'react'
import axios from 'axios'
import authHeader from "../../services/authHeader"
import { io } from 'socket.io-client';
import { useEffect } from 'react';


const MessageInput = () => {

    const [text, setText] = useState("")
    const textAreaRef = useRef(null)

    const user = JSON.parse(localStorage.getItem("user"))



    async function handleSubmit(e) {
        e.preventDefault()


        axios.post("http://localhost:5000/api/message", { text, user })
            .catch((err) => console.log(err))
        setText(prev => "")
        textAreaRef.current.value = ""
    }

    async function handleChange(e) {
        e.preventDefault()
        setText((prev) => e.target.value)
    }



    useEffect(() => {


    }, [])

    return (
        <div className=" py-5  h-24   flex items-center justify-center px-5  bg-slate-650  border-none  ">
            <div className="flex h-12  flex-row w-full bg-gray-600 p-3 rounded-lg items-center ">
                {/* PLUS ICON */}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <form onSubmit={handleSubmit} className="w-full ">
                    <div ref={textAreaRef} className="w-full h-auto  text-gray-300  resize-none   overflow-hidden  text-xl  outline-none  bg-transparent" >
                        <input value={text || ""} ref={textAreaRef} onChange={handleChange} className="w-full px-2 mx-2 h-auto bg-gray-600 outline-none border-none rounded-md" type="text" />
                    </div>
                </form>
                <div className="space-x-3 flex flex-row items-center ">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-300 text-gray-400 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                    <div class="w-5 h-5 rounded-md hover:bg-gray-300 bg-gray-400 p-4 cursor-pointer flex items-center justify-center">
                        <span>GIF</span>
                    </div>
                    {/* SMILEY ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-300 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                {/* GIFT ICON */}
            </div>

        </div>

    )
}

export default MessageInput