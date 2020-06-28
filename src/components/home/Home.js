import React, { Component } from 'react'
import Searchbar from '../dashboard/Searchbar/Searchbar'
import Products from '../dashboard/Products/Products'
import Footer from '../dashboard/Footer/Footer'
class Home extends Component {
    render() {
        return (
          <div>
            <div className="row">
              <div className="col-md-12">
                <Searchbar />
              </div>
            </div>
            <hr/>
              <Products />
            <div className="row">
              <div className="col-md-12">
                <Footer />
              </div>
            </div>
          </div>
        )
    }
}

export default Home
