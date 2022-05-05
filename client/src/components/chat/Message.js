import React from 'react'
import { useState } from 'react';

const Message = ({ props }) => {

    const [data, setData] = useState()

    const messageDate = new Date(props.createdAt)
    const formattedMsgDate = messageDate.getDay() + "/" + messageDate.getMonth() + "/" + messageDate.getFullYear()
    const date = new Date()
    const today = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()

    return (
        <div className="w-full min-w-full p-2 bg-gray-700 text-white   ">
            {(formattedMsgDate !== today) &&
                <div className="flex flex-row items-center  justify-center">
                    <hr className="w-full opacity-30" />
                    <span className="text-l w-40 text-center text-gray-400 ">{formattedMsgDate.toString()}</span>
                    <hr className="w-full  opacity-30" />
                </div>}
            <div className="group">
                <div className="group-hover:visible  invisible	 flex rounded-lg   bg-gray-700 relative  border-gray-600   flex-row ml-auto mr-3 -mb-4  items-center  justify-between w-32 text-xl ">
                    <div className="flex  flex-row w-9 h-9 hover:bg-gray-600 items-center  justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="flex flex-row  w-9 h-9 hover:bg-gray-600 items-center justify-center">

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </div>
                    <div className="flex flex-row  w-9 h-9 hover:bg-gray-600 items-center justify-center">
                        <span className="  cursor-pointer">...</span>
                    </div>
                </div>
                <div className="flex py-4 flex-row cursor-pointer   hover:bg-gray-800 ">
                    <div className="px-2 ">
                        <img className="w-16 h-12 object-cover cursor-pointer  rounded-full" alt="" src={props.user?.profilePic} />
                    </div>

                    <div class="flex flex-col ml-3 space-y-1">
                        <div className="flex  items-center space-x-3 flex-row">
                            <a href="/" className="text-xl hover:text-underline text-gray-300">{props.user?.username}</a>
                            <span className="text-sm text-gray-500 ">{formattedMsgDate}</span>
                        </div>
                        <p className="text-gray-350 ">{props.text}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Message