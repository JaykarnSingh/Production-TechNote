import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
const PrivateComponentAdmin = () => {
    const auth=localStorage.getItem('user')
  return (
  <>
    {auth?<Outlet/>:<Navigate to="admin"/>}
    </>
  )
}

export default PrivateComponentAdmin