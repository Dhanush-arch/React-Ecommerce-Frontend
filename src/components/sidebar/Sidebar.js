import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar row-fluid">
          <div className="sidebar-container fluid col-12">
            <ul className="menu-items">
              <li className="py-4 pr-4"><a href="/home">Home</a></li>
              <li className="py-4 pr-4"><a href="/home">Products</a></li>
              <li className="py-4 pr-4"><a href="/orders">Your Orders</a></li>
              <li className="py-4 pr-4"><a href="/cc">Customer Care</a></li>
            </ul>
          </div>
        </div>
    )
}

export default Sidebar
