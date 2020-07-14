import React from 'react'
import PaginationNav from '../PaginationNav/PaginationNav'
function Footer() {
    return (
        <div className="sticky-footer text-center">
        <PaginationNav/>
          <hr/>
          <h3>Amazon</h3>
          <p>Copyrights owned by www.html.com</p>
        </div>
    )
}

export default Footer
