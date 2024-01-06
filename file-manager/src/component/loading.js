import React from 'react'

const Loading = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-pink-200/50 backdrop-blur-sm z-[9999] w-[100%] h-[70%]">
    <div className='w-[35vw] h-[40vh] relative'>
      <img
        src="https://cdn.dribbble.com/users/1127965/screenshots/3240034/media/f54b31283e36799dfb439b7a30795e23.gif"
        className="w-full h-full absolute inset-2.5" 
      />
    </div>
  </div>
  )
}

export default Loading
