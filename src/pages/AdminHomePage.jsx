import React from 'react'
import Dashboard from '../Admin/Dashboard'
import { SideBar } from '../Admin/SideBar'

export const AdminHomePage = () => {
  return (
    <div>
      <div>
      <SideBar/>
      </div>
       <div>
        <Dashboard/>
       </div>
        AdminHomePage
        
    </div>
  )
}
