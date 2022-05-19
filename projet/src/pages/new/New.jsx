import React from 'react'
import Navbar from '../../componets/navbar/Navbar'
import Sidebar from '../../componets/sidebar/Sidebar'
import "./New.scss"

function New() {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        test

      </div>
    </div>
  )
}

export default New