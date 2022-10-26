import React from 'react'
import {useContext} from 'react'
import UserDataContext from '../context/UserDataContext'
function MainSegundo() {

  const userdata = useContext(UserDataContext)
  return (
    <div>
      <h2>Seja Bem Vindo: {userdata.firstname}</h2>
    </div>
  )
}

export default MainSegundo
