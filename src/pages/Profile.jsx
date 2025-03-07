import React from 'react'
import MyordersPage from './MyordersPage'

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 spacee-y-6 md:space-y-0">
            {/* {left section} */}
            <div className="w-full md:w-1/3 lg:w-1/4 hadow-md roundedlg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Gurneet</h1>
            <p className="text-lg text-gray-600 mb-4">Gurneet@exanple.com</p>
            <button className='w-full bg-red-500 text-whity py-2 px-4 rounded hover:bg-red-600'>
                Logout
            </button>
            </div>
            {/* {rigth section} */}
            <div className="w-full md:w-2/3 lg:w-3/4"></div>
            <MyordersPage/>
        </div>
      </div>
    </div>
  )
}
export default Profile
