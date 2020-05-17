import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/c4c2b231-3584-497c-a4f8-e01c6ab87b86"> Go To Profile </Link>
      <Link to="/dashboard/main"> Go To Main </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
