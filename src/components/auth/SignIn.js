import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state)
        this.props.signIn(this.state)
    }
    render() {
        const { authError } = this.props;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleSubmit}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn #304ffe indigo accent-4">Login</button>
                        <div className="red-text center">
                        { authError ? <p>{authError}</p> : null }
                        </div>
                        
                    </div>
                </form>
            </div>
        )
    } 
}

const mapStateToProp = (state) => {
    return {
        authError: state.auth.authError
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}


export default connect(mapStateToProp, mapDispatchToProps)(SignIn)
