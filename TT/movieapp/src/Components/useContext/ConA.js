import React, { createContext } from 'react'
import ConB from './ConB'

const Data = createContext()

const ConA = () => {
  return (
    <Data.Provider value={{nam: "maulik",age:21}}>
        <ConB />
    </Data.Provider>
  )
}

export default ConA
export {Data}