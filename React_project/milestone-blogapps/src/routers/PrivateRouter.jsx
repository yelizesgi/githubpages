import {Navigate, Outlet} from "react-router-dom"

import React from 'react'

const PrivateRouter = () => {
  const currentUser= true
  return currentUser ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouter