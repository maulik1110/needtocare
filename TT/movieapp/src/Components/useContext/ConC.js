import React, { useContext } from 'react'
import {Data} from './ConA'

const ConC = () => {
    const naam = useContext(Data);
  return (
    <>
    <h1>ConC here {naam.name}</h1>
    <h1>ConC here {naam.age}</h1>
    </>
  )
}

export default ConC