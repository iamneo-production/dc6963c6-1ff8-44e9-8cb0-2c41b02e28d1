import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { FaUserCircle } from "react-icons/fa";
import {HiOutlineMail,HiDeviceMobile } from "react-icons/hi";


const ModalComponent=(props)=>{
    
    return(
        <Modal open={props.showModal} onClose={props.setModal} center>
        <h2>{props.heading}</h2>
        <form className="mt-4">
        <div className="form-group">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} >
                        First Name
                    </label> 
                    <div> 
                    < FaUserCircle className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="text" value={props.Data.username}  className="form-control ps-5 py-3 shadow-none" placeholder="Enter firstname" />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} >
                        Last Name
                    </label> 
                    <div> 
                    < FaUserCircle className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="text" value={props.Data.username} className="form-control ps-5 py-3 shadow-none" placeholder="Enter lastname" />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}}>
                        Email
                    </label> 
                    <div> 
                    < HiOutlineMail className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="email" value={props.Data.email} className="form-control ps-5 py-3 shadow-none" name="username" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} >
                        Mobile No.
                    </label> 
                    <div> 
                    < HiDeviceMobile className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="number" value={props.Data.mobile} className="form-control ps-5 py-3 shadow-none" placeholder="Enter Mobile no." />
                    </div>
                </div>
                <button type="submit" className="btn py-3 w-100 mt-4 text-white" style={{background:'#188AFA'}}>Sign In</button>
                </form>
      </Modal>
    )
}

export default ModalComponent;