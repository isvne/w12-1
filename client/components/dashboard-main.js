import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/c4c2b231-3584-497c-a4f8-e01c6ab87b86"> Go To Profile </Link>
      <Link to="/dashboard"> Go To Root </Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
