import React, { Component } from 'react';
import Logo from '../Components/logo';
import {FaUserEdit} from 'react-icons/fa'
import {HiUserRemove} from 'react-icons/hi'

class AdminHome extends Component{
    
    
    render(){
        const users=[
            {
                'username':'admin1',
                'email':'admin1@mail.com',
            },
            {
                'username':'admin2',
                'email':'admin2@mail.com',
            },
            {
                'username':'admin3',
                'email':'admin3@mail.com',
            },
            {
                'username':'admin4',
                'email':'admin4@mail.com',
            },
        ]

        return(
            
            <>
            <div className='container-fluid mt-4'> 
            <div className='d-flex row'>
                <div className='col-3'> 
                <Logo> </Logo>
                </div> 
                <div className='col-6'>
                <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div> 
                </div>
                 <div className='col-3'>   
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
                        users.map(user=>
                            <tr>
                            <th scope="row">{user.username}</th>
                            <td>{user.email}</td>
                            <td><FaUserEdit/></td>
                            <td><HiUserRemove/></td>
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
        )
    }
}

export default AdminHome;