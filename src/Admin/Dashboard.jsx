import React from 'react'
//import '../Style/Dashboard.css'
import '../AdminStyle/Dashboard.css'
const Dashboard = () => {

 
  return (
    <div className='dashboard'>
      <h1>DASHBOARD</h1>
      <h3>WELCOME ADMIN</h3>
      <div className='dashboardcardsContainer'>
        <div className='dashboardCard'>
          <h1>$576,771</h1>
          <p>THIS MONTH</p>
          <p className='yellow'>VIEW REPORT</p>
        </div>
        <div className='dashboardCard'>
          <h1>$78,965</h1>
          <p>THIS MONTH</p>
          <p className='yellow'>VIEW REPORT</p>
        </div>
        <div className='dashboardCard'>
          <h1>$4,223</h1>
          <p>THIS MONTH</p>
          <p className='yellow'>VIEW REPORT</p>
        </div>
        <div className='dashboardCard'>
          <h1>$8,888</h1>
          <p>THIS MONTH</p>
          <p className='yellow'>VIEW REPORT</p>
        </div>
        <div className='dashboardCard'>
          <h1>6.88%</h1>
          <p>THIS MONTH</p>
          <p className='yellow'>VIEW REPORT</p>
        </div>
        <div className='dashboardCard'>
          <h1>12.18%</h1>
          <p>THIS MONTH</p>
          <p className='yellow'>VIEW REPORT</p>
        </div>
        <div className='dashboardCard'>
          <h1>$98,764</h1>
          <p>THIS MONTH</p>
          <p className='yellow'>VIEW REPORT</p>
        </div>
        <div className='dashboardCard'>
          <h1>$9,988,764</h1>
          <p>THIS MONTH</p>
          <p className='yellow'>VIEW REPORT</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard