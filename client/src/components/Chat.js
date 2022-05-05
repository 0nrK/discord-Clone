import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Message from './chat/Message'
import MessageInput from './chat/MessageInput'
import UserHeader from './chat/UserHeader'


const Chat = ({ props }) => {



    const scrollbar = useRef(null)

    useEffect(() => {

    }, [])

    return (
        <div ref={scrollbar} className="h-screen w-full  flex flex-col bg-gray-700   " >
            <div className="h-20">
                <UserHeader />

            </div>
            <div className="space-y-1 h-4/5  overflow-y-scroll   ">

                {props?.map((msg) => {
                    return (
                        <Message key={msg._id} props={msg} />
                    )
                })}



            </div>
            <div className="h-32">
                <MessageInput />

            </div>

        </div >
    )
}

export default Chat