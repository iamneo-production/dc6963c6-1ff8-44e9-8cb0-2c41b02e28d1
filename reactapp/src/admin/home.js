import React, { Component } from 'react';
import Logo from '../Components/logo';
import {FaUserEdit ,FaUserPlus} from 'react-icons/fa'
import {HiUserRemove} from 'react-icons/hi';
import ModalComponent from './components/modal';
import Loader from '../Components/loader';
import axios from 'axios';
import Cookies from 'universal-cookie';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {Notification} from '../Components/notifications'

class AdminHome extends Component{
    
    constructor(props){
        super(props);
        this.state={
            Loading:true,
            showModal:false,
            selectedUser:{},
            selectedType:'',
            heading:'',
            users:[]
        }
    }

    SetModal=(user,selected,title)=>{
        let splitString=user.username.split(" ");
        let userData={
            id:user.id,
            fname:splitString[0],
            lname:splitString[1],
            email:user.email,
            mobileNum:user.mobileNum
        }
        this.setState({...this.state,showModal:!this.state.showModal,selectedUser:userData,selectedType:selected,heading:title})
    }
    closeModal=()=>{
        this.setState({...this.state,showModal:!this.state.showModal,selectedUser:{},selectedType:'',heading:''})
    }



    //////////GetUsers/////////////////////
    GetUser=()=>{
        const cookie=new Cookies();
        axios({
            method:'GET',
            url:'https://8080-aaaabbfaadfcfeaadebaabbeabfac.examlyiopb.examly.io/admin',
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
                 Accept: "application/json",
                'Access-Control-Allow-Origin': '*',
                'Authorization':`Bearer ${cookie.get('tkn')}`
              }
        })
        .then(res=>{

            if(res.status===200){
                this.setState({
                    ...this.state,
                    users:res.data,
                    Loading:false
                })                  
            }
            else{
                window.location="/signin"
            }
        })
        .catch(err=>window.location="/signin")
    }
    

    //////////AddUsers///////////

    AddUsers=(userData)=>{
        const cookie=new Cookies();
        let SendData={
            username:userData.fname+" "+userData.lname,
            email:userData.email,
            mobileNum:userData.mobileNum,
            password:userData.password
        }
        this.setState({...this.state,Loading:true})
        axios({
            method:'POST',
            url:'https://8080-aaaabbfaadfcfeaadebaabbeabfac.examlyiopb.examly.io/signup',
            headers:{
                "Content-Type": "application/json",
                 Accept: "application/json",
                'Access-Control-Allow-Origin': '*',
                'Authorization':`Bearer ${cookie.get('tkn')}`
              },
              data:SendData
        })
        .then(res=>{
            this.setState({
                ...this.state,
                Loading:false,
                showModal:false
            })
            this.GetUser()
            res.data.Status==="true"?
            Notification({
                title:'Successfull',
                message:res.data.Message,
                type:'success'
            }):
            Notification({
                title:'Error',
                message:res.data.Message,
                type:'danger'
            })
             
        })
        .catch(err=>Notification({
            title:'Error',
            message:"Failed To Register",
            type:'danger'
        }))
    }

    ////Edit User//////

    EditUser=(userData)=>{
        const cookie=new Cookies();
        let SendData={
            id:this.state.selectedUser.id,
            username:userData.fname+" "+userData.lname,
            email:userData.email,
            mobileNum:userData.mobileNum,
        }
        this.setState({...this.state,Loading:true})
        axios({
            method:'PUT',
            url:`https://8080-aaaabbfaadfcfeaadebaabbeabfac.examlyiopb.examly.io/admin/userEdit/${this.state.selectedUser.id}`,
            headers:{
                "Content-Type": "application/json",
                 Accept: "application/json",
                'Access-Control-Allow-Origin': '*',
                'Authorization':`Bearer ${cookie.get('tkn')}`
              },
              data:SendData
        })
        .then(res=>{
            this.setState({
                ...this.state,
                Loading:false,
                showModal:false
            })
            this.GetUser()
            res.data.Status==="true"?
            Notification({
                title:'Successfull',
                message:"Updated Successfully!",
                type:'success'
            }):
            Notification({
                title:'Error',
                message:res.data.Message,
                type:'danger'
            })
             
        })
        .catch(err=>{
            Notification({
            title:'Error',
            message:"Failed To Update",
            type:'danger'
        })
    })
    }

    ///Delete User/////

    DeleteUser=(id)=>{
        const cookie=new Cookies();
        this.setState({...this.state,Loading:true})
        axios({
            method:'DELETE',
            url:`https://8080-aaaabbfaadfcfeaadebaabbeabfac.examlyiopb.examly.io/admin/delete/${id}`,
            headers:{
                "Content-Type": "application/json",
                 Accept: "application/json",
                'Access-Control-Allow-Origin': '*',
                'Authorization':`Bearer ${cookie.get('tkn')}`
              }
        })
        .then(res=>{
            this.setState({
                ...this.state,
                Loading:false,
            })
            this.GetUser()
            res.data.Status==="true"?
            Notification({
                title:'Successfull',
                message:res.data.Message,
                type:'success'
            }):
            Notification({
                title:'Error',
                message:res.data.Message,
                type:'danger'
            })
             
        })
        .catch(err=>{
            Notification({
            title:'Error',
            message:"Failed To Delete",
            type:'danger'
        })
    })
    }


    componentDidMount(){
       this.GetUser();
    }
    
    render(){
        return(
            
            <>
            {
                this.state.Loading===true?
                <Loader/>:
                <>
                <ModalComponent AddUsers={this.AddUsers} EditUser={this.EditUser} Data={this.state.selectedUser} selected={this.state.selectedType} heading={this.state.heading} closeModal={this.closeModal} showModal={this.state.showModal} setModal={this.SetModal}/>
                <ReactNotification isMobile='true' breakpoint='700px'/>
            <div className='container-fluid mt-4'> 
            <div className='d-flex row'>
                <div className='col-3'> 
                <Logo> </Logo>
                </div> 
                <div className='col-6'>
                <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div> 
                </div>
                 <div className='col-3 text-center'>
                 <button type="button" onClick={()=>this.SetModal({
                    username:'',
                    email:'',
                    mobileNum:'',
                    password:'' 
                 },'add','Add user')} className="btn btn-outline-primary">Add User<FaUserPlus className="mx-2 fs-5"/></button>
                </div>
                <div className='container'>
                <div style={{background:'#F3F3F3'}} className='mt-3 rounded'>
                                    <table class="table">
                                        <thead>
                    <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(user=>
                            <tr key={user.id}>
                            <th scope="row">{user.username}</th>
                            <td>{user.email}</td>
                            <td><FaUserEdit onClick={()=>this.SetModal(user,'edit','Edit user')} style={{cursor:'pointer'}}/></td>
                            <td><HiUserRemove onClick={()=>this.DeleteUser(user.id)} style={{cursor:'pointer'}}/></td>
                            </tr>
                            )
                    }
                </tbody>
                </table>
                </div>
                </div>
            
            
            </div>
            </div>	
            </>
            }
            </>
        )
    }
}

export default AdminHome;
