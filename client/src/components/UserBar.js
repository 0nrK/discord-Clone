import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/userSlice'

const UserBar = () => {

    const { user } = useSelector((state) => state)
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout())
    }

    return (
        <section className="">

            <div className="flex flex-row cursor-pointer   justify-between w-72 px-3 py-2 bg-slate-800   items-center space-x-3">
                <div className="flex flex-row space-x-2">
                    <img onClick={() => handleLogout()} className="w-12 h-12 object-cover rounded-full " alt="" src={user.profilePic || "https://i.stack.imgur.com/l60Hf.png"} />
                    <div className="flex flex-col">
                        <span className="text-gray-200 font-bold">{user.username}</span>
                        <span className="text-gray-400 text-sm">#4231</span>
                    </div>
                </div>
                <div className="flex  flex-row space-x-2  ">
                    <div className="w-9 h-9 rounded-md hover:bg-gray-700 items-center flex  justify-center">
                        {/* MIC ICON */}
                        <svg class="w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-9 h-9 rounded-md hover:bg-gray-700 items-center flex  justify-center">
                        {/* SOUND ICON */}
                        <svg class="w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-9 h-9 rounded-md hover:bg-gray-700 items-center flex  justify-center">
                        {/* SETTINGS ICON */}
                        <svg class="w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default UserBar