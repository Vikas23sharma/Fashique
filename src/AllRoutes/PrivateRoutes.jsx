import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    const isAuth = JSON.parse(localStorage.getItem("isAuth")) || false
    console.log(children)
    if (!isAuth) {
        return <Navigate to="/login" replace={true} />
    } else {
        return children
    }
}

export default PrivateRoutes