import React, { Component } from 'react';
import Logo from '../Components/logo';
import '../css/signup.css';
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from 'react-router-dom';

class SignUp extends Component {
    render() {
        return (
            <div className="py-5" style={{backgroundImage:'linear-gradient(to bottom right, #CDEFFE, #EAF6FE)'}}>
            <div className="container d-flex justify-content-center">
                <div className="bg-white p-5" style={{height:'fitContent',borderRadius:"40px"}}>
                <Logo/>
                <div className="mt-5">
                <h1 className="login-title">Create a new account</h1>
                <p className="mt-3 text-muted mplus" style={{maxWidth:'400px'}}>Photo Frame helps you to connect and share things with your friends. </p>
                </div>
                <form className="mt-4">
                <div class="form-group">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} for="email">
                        First Name
                    </label> 
                    <div> 
                    < FaUserCircle className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="text" className="form-control ps-5 py-3 shadow-none" placeholder="Enter firstname" />
                    </div>
                </div>
                <div class="form-group mt-4">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} for="email">
                        Last Name
                    </label> 
                    <div> 
                    < FaUserCircle className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="text" className="form-control ps-5 py-3 shadow-none" placeholder="Enter lastname" />
                    </div>
                </div>
                <div class="form-group mt-4">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} for="email">
                        User ID
                    </label> 
                    <div> 
                    < HiOutlineIdentification className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="text" className="form-control ps-5 py-3 shadow-none" placeholder="Enter userID" />
                    </div>
                </div>
                <div class="form-group mt-4">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} for="password">
                        Password
                    </label> 
                    <div> 
                    < AiOutlineLock className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="password" className="form-control ps-5 py-3 shadow-none" placeholder="Enter your password" />
                    </div>
                </div>
                <div className="mt-3 ">
                <Link to="/signin" style={{textDecoration:'none',fontSize:'12px'}}>Already having account?</Link>
                </div>
                <button type="button" className="btn py-3 w-100 mt-4 text-white  mb-4" style={{background:'#188AFA'}}>Sign Up</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}

export default SignUp;