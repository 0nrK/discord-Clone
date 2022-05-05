import React from 'react'

const UserHeader = () => {
    return (
        <section className="flex w-full shadow-2xl flex-row bg-slate-650  px-5 py-3.5  items-center justify-between ">
            <div className="flex flex-row items-center space-x-1">
                <span className="text-3xl text-gray-500">@</span>
                <span className="text-gray-200 text-xl cursor-pointer">Chat Room #1</span>
            </div>
            <div className="flex flex-row space-x-5 text-gray-300 items-center">
                <div className="flex flex-row space-x-3">
                    {/* Start voice call ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="hover:text-gray-200 h-8 w-8 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z" />
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {/* Start video call ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="hover:text-gray-200 h-8 w-8 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    {/* Add friends ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="hover:text-gray-200 h-8 w-8 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                </div>
                <div>
                    <input className="cursor-pointer w-48 hover:w-72 hover:transition-all focus:transition-all focus:w-72 transform transition  delay-150 bg-gray-800 outline-none py-2 px-2 rounded-md text-gray-300" type="text" placeholder="Search" />
                </div>
                <div className="flex flex-row space-x-3 items-center">
                    {/* Inbox ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="hover:text-gray-200 h-8 w-8 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
                    </svg>
                    {/* Help ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="hover:text-gray-200 h-8 w-8 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default UserHeader