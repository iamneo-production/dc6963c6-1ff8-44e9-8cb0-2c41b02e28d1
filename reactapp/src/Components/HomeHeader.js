import React, { Component } from 'react';
import Logo from './logo';
import {BsPersonPlusFill} from 'react-icons/bs'

class HomeHeader extends Component {
    render() {
        return (
            <div className="row  mx-0 d-flex align-items-center">
                <div className="col-3 px-0 d-flex align-items-center">
                <Logo/>
                </div>
                <div className="col-6 px-0 d-flex justify-content-center align-items-center">
                <button type="button" style={{textAlign:'left'}} className="btn btn-outline-primary w-100 text-left">Search People...<BsPersonPlusFill className="float-end fs-4"/></button>
                </div>
                <div className="col-3 px-0 d-flex align-items-center justify-content-center">
                <p className="mb-0 me-3">Shubham Singh</p>
                <div className="rounded-circle fs-4 d-flex text-white justify-content-center align-items-center" style={{width:'40px',height:'40px',background:'#7952B3'}}> S</div>
                </div>
                
            </div>
        );
    }
}

export default HomeHeader;