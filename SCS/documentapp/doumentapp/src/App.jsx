import React from 'react'
import Background from './component/Background'
import Foreground from './component/Foreground'

const App = () => {
  return (
    <div className='absolute w-full h-screen bg-zinc-800 flex justify-center text-center flex-col'>
      <Background/>

      <Foreground/>
    </div>
  )
}

export default App