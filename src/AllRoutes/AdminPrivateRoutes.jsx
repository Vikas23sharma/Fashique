import React from 'react'
import { Navigate } from 'react-router-dom'
const AdminPrivateRoutes = ({ children }) => {
    const isAuthAdmin = JSON.parse(localStorage.getItem("isAuthAdmin")) || false
    console.log(children)
    if (isAuthAdmin === false) {
        return <Navigate to="/adminlogin" replace={true} />
    }
    return children
}
export default AdminPrivateRoutes