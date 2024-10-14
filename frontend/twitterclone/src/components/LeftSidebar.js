import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import {Link} from "react-router-dom"


const LeftSidebar = () => {
  return (
    <div className='w-[20%]'>
        <div>
            <div>
                <img className=' ml-5' width={"50px"} src='https://www.citypng.com/public/uploads/preview/hd-twitter-x-new-logo-png-735811696672788haniphkh2j.png' alt='twitter-logo'/>
            </div>
            <div className='my-4'>
                <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                    <CiHome />
                    </div>
                    <h1 className=' font-bold text-lg ml-2'>Home</h1>
                </Link>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                    <CiHashtag />
                    </div>
                    <h1 className=' font-bold text-lg ml-2'>Explore</h1>
                </div>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                    <IoIosNotificationsOutline />
                    </div>
                    <h1 className=' font-bold text-lg ml-2'>Notifications</h1>
                </div>
                <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                    <CiUser />
                    </div>
                    <h1 className=' font-bold text-lg ml-2'>Profile</h1>
                </Link>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                    <CiBookmark />
                    </div>
                    <h1 className=' font-bold text-lg ml-2'>Bookmarks</h1>
                </div>
                <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                    <div>
                    <AiOutlineLogout />
                    </div>
                    <h1 className=' font-bold text-lg ml-2'>Logout</h1>
                </div>
                <button className=' px-4 py-2 border-none text-md bg-Link] w-full rounded-full text-white font-bold'>Post</button>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar