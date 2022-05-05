import React from 'react'
import UserBar from './UserBar'

const Sidebar = ({ props }) => {

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <aside className="w-72 flex  flex-col  space-y-3 bg-slate-700">

            <header className=" border-b-2 p-3 border-gray-800">
                <input placeholder="Find or start a conservation" className="cursor-pointer bg-gray-800 outline-none py-2 px-2 rounded-md text-gray-500" type="text" />
            </header>

            <div className=" w-full h-auto p-3">
                <div className="flex p-3 text-gray-300 duration-200  hover:text-gray-200 cursor-pointer hover:bg-gray-600 rounded-md flex-row space-x-5 items-center ">
                    {/* Friends Icon */}
                    <svg className="  w-8 h-8" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span className="text-xl text-gray-300">Friends</span>
                </div>
                <div>
                    <div className="flex flex-row mx-2 my-2 items-center justify-between">
                        <h2 className="hover:text-gray-100 text-gray-200">DIRECT MESSAGES</h2>
                        <span className="hover:text-gray-200 text-gray-300 cursor-pointer text-3xl">+</span>
                    </div>
                    {/* Online friend */}
                    <div className="flex cursor-pointer rounded-md group flex-row px-3 py-1 bg-gray-600 justify-between items-center">
                        <div className="flex flex-row items-center space-x-2">
                            <div className="flex flex-row">
                                <img className="w-12 h-12 rounded-full object-fit" alt="" src="https://cdn.dribbble.com/users/1984117/screenshots/6032411/media/56d3db6491e5c36f30360b294577656f.png?compress=1&resize=400x300&vertical=top" />
                                <div className="w-4 h-4 mt-8 border-2 p-1 border-gray-700  -ml-4 rounded-full bg-green-600"></div>
                            </div>
                            <span className="text-l font-bold text-gray-300">Chat Room #1</span>
                        </div>
                        <span className="hidden  group-hover:flex text-2xl text-slate-300">x</span>
                    </div>

                </div>
            </div>
            <div className="fixed bottom-0">
                <UserBar className="" />

            </div>
        </aside >
    )
}

export default Sidebar