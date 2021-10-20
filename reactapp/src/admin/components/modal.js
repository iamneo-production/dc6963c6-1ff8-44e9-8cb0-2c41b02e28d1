import React,{useState,useEffect} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import {HiOutlineMail,HiDeviceMobile } from "react-icons/hi";


const ModalComponent=(props)=>{
    const [userData,setUserData]=useState({
        fname:props.Data.fname?props.Data.fname:"",
        lname:props.Data.lname?props.Data.lname:"",
        email:props.Data.email?props.Data.email:"",
        mobileNum:props.Data.mobileNum?props.Data.mobileNum:"",
        password:props.Data.password?props.Data.password:""
    })
    useEffect(()=>{
        setUserData({
        fname:props.Data.fname?props.Data.fname:"",
        lname:props.Data.lname?props.Data.lname:"",
        email:props.Data.email?props.Data.email:"",
        mobileNum:props.Data.mobileNum?props.Data.mobileNum:"",
        password:props.Data.password?props.Data.password:""
        })
    },[props.Data.fname,props.Data.lname,props.Data.email,props.Data.mobileNum,props.Data.password])
    return(
        
        <Modal open={props.showModal} onClose={props.closeModal} center>
        <h2>{props.heading}</h2>
        <form className="mt-4" onSubmit={props.selected==="add"?(e)=>{e.preventDefault();props.AddUsers(userData)}:(e)=>{e.preventDefault();props.EditUser(userData)}}>
        <div className="form-group">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} >
                        First Name
                    </label> 
                    <div> 
                    < FaUserCircle className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="text" value={userData.fname} onChange={(e)=>setUserData({...userData,fname:e.target.value})} className="form-control ps-5 py-3 shadow-none" placeholder="Enter firstname" />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} >
                        Last Name
                    </label> 
                    <div> 
                    < FaUserCircle className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="text" value={userData.lname} onChange={(e)=>setUserData({...userData,lname:e.target.value})} className="form-control ps-5 py-3 shadow-none" placeholder="Enter lastname" />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}}>
                        Email
                    </label> 
                    <div> 
                    < HiOutlineMail className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} className="form-control ps-5 py-3 shadow-none" name="username" placeholder="Enter Email" />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} >
                        Mobile No.
                    </label> 
                    <div> 
                    < HiDeviceMobile className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="number" value={userData.mobileNum} onChange={(e)=>setUserData({...userData,mobileNum:e.target.value})} className="form-control ps-5 py-3 shadow-none" placeholder="Enter Mobile no." />
                    </div>
                </div>
                {
                    props.selected==="add"&&
                    <div className="form-group mt-3">
                    <label className="control-label mplus text-muted mb-2" style={{fontSize:'13px'}} >
                        Password
                    </label> 
                    <div> 
                    < AiOutlineLock className="position-absolute mt-3 ms-3 text-muted" style={{fontSize:'26px'}}/> 
                    <input type="password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} className="form-control ps-5 py-3 shadow-none" placeholder="Enter Password..." />
                    </div>
                </div>
                }
                <button type="submit" className="btn py-3 w-100 mt-4 text-white" style={{background:'#188AFA'}}>{props.selected==="edit"?'Update':'Add'}</button>
                </form>
      </Modal>
    )
}

export default ModalComponent;