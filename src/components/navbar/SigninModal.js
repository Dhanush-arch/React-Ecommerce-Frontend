import React, { Component } from 'react'
// Redux setup
import {connect} from 'react-redux'
import loginAction from '../../actions/loginAction';

import './signinmodal.css'

class SigninModal extends Component {

    handlelogin = (e) =>{
      const email = document.getElementById('InputEmail').value
      const password = document.getElementById('InputPassword').value
      this.props.loginaction(email, password);
    }

    render() {
        return (
          <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header my-header">
                  <h4 class="modal-title" id="staticBackdropLabel">Sign In</h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="InputPassword" placeholder="Password"/>
                  </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-info" onClick={this.handlelogin} data-dismiss="modal">Summit</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		keys: state.key,
		isloggedin: state.islogedin,
	}
}

const mapDispatchToProps = (dispatch) =>{
  return{
    loginaction: (email,password) => {dispatch(loginAction(email, password))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninModal);
