import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            login: '',
            password: ''
        }
    }

    handleChangeLogin(val){
        this.setState({login: val})
    }

    handleChangePassword(val){
        this.setState({password: val})
    }
    handleLogin(){
        {alert(`Username: ${this.state.login} Password: ${this.state.password}`)}
    }
    

    render(){
        return(
            <div> 
                <input onChange= { (e) => {this.handleChangeLogin(e.target.value)}}/>
                <input onChange={ (e) => {this.handleChangePassword(e.target.value)}}/>
                <button onClick= { (e) => this.handleLogin(e.target.value)}> Login </button>
                
            </div>
        )
    }
}

export default Login