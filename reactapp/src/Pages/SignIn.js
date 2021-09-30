import React, { Component } from 'react';
import Logo from '../Components/logo';
import '../css/signin.css';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {Notification} from '../Components/notifications';


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
    }
     onSubmitForm=(e)=>{
         e.preventDefault();
         if(this.state.username.trim()===""||this.state.password.trim()===""){
            Notification({
                title:'Error',
                message:'Please fill all the fields',
                type:'danger'
            })
          }
          else{
            Notification({
                title:'Successfull',
                message:'Just for testing!',
                type:'success'
            })
          }
     }

    render() {
        return (
            <div className="py-5" style={{backgroundImage:'linear-gradient(to bottom right, #CDEFFE, #EAF6FE)'}}>
            <ReactNotification isMobile='true' breakpoint='700px'/>
            <div className="container d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                <div className="bg-white p-5" style={{height:'fitContent',borderRadius:"40px"}}>
                <Logo/>
                <div className="mt-5">
                <h1 className="login-title">Log in to your account</h1>
                <p className="mt-3 text-muted mplus" style={{maxWidth:'400px'}}>Log in now to access the latest insights experience for your social networking.</p>
                </div>
                <form className="mt-4" onSubmit={this.onSubmitForm}>
                <div className="form-group">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}}>
                        Username
                    </label> 
                    <div> 
                    < FaUserCircle className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="text" value={this.state.username} onChange={(e)=>this.setState({...this.state,username:e.target.value})} className="form-control ps-5 py-3 shadow-none" name="username" placeholder="Enter Username" />
                    </div>
                </div>
                <div className="form-group mt-4">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}}>
                        Password
                    </label> 
                    <div> 
                    < AiOutlineLock className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="password" value={this.state.password} onChange={(e)=>this.setState({...this.state,password:e.target.value})} className="form-control ps-5 py-3  shadow-none" name="password" placeholder="Enter password" />
                    </div>
                </div>
                <div className="mt-3 ">
                <Link to="/signup" style={{textDecoration:'none',fontSize:'12px'}}>Create a new account</Link>
                    <Link to="/" className="float-end mt-1" style={{textDecoration:'none',fontSize:'12px'}}>Forgot password?</Link>
                </div>
                <button type="submit" className="btn py-3 w-100 mt-4 text-white" style={{background:'#188AFA'}}>Sign In</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}

export default SignIn;