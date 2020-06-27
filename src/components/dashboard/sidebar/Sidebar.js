import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebar-container">
            <ul className="menu-items">
              <li className="py-4"><a href="#">Home</a></li>
              <li className="py-4"><a href="#">Products</a></li>
              <li className="py-4"><a href="#">Your Orders</a></li>
              <li className="py-4"><a href="#">Customer Care</a></li>
            </ul>
          </div>
        </div>
    )
}

export default Sidebar
