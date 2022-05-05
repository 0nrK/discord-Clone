import React from 'react'

const Nav = () => {
    return (
        <nav className="w-24 p-3 relative h-screen bg-gray-800  left-0">
            <div className="flex py-3   flex-row items-center justify-center">
                <div className=" h-11 border absolute left-0">

                </div>
                <div className="w-14 cursor-pointer  duration-700 h-14 items-center text-center flex justify-center bg-blue-800 rounded-2xl    ">
                    <span className="text-4xl text-gray-300 ">D</span>
                </div>

            </div>
        </nav>
    )
}

export default Nav