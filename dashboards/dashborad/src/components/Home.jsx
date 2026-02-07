import React from 'react'
import TopBar from './TopBar.jsx'
import Dashboard from './Dashboard.jsx'

const Home = () => {
  return (
    <div>
      <TopBar />
      <Dashboard />
    </div>
  )
}

export default React.memo(Home)
