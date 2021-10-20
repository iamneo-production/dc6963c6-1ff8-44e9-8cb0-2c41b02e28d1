import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {Notification} from './notifications';


class CreatePost extends Component {
     constructor(props){
         super(props);
         this.state={
             image:null,
             name:null,
             Caption:''
         }
     }
    
    uploadPhoto=(e)=>{
        const cookie=new Cookies();
        e.preventDefault();
        var bodyFormData=new FormData();
        bodyFormData.append('imageFile',this.state.image)
        bodyFormData.append('userId',cookie.get('id'))
        bodyFormData.append('imageName',this.state.name)
        bodyFormData.append('imageTag',this.state.Caption)
        this.props.Loader();
        axios({
            method:'POST',
            url:'https://8080-aaaabbfaadfcfeaadebaabbeabfac.examlyiopb.examly.io/addImage',
            headers:{
                "Content-Type": "multipart/form-data",
                 Accept: "application/json",
                'Access-Control-Allow-Origin': '*',
                'Authorization':`Bearer ${cookie.get('tkn')}`
              },
              data:bodyFormData
        })
        .then(res=>{
            if(res.data===true){
                this.props.Loader();
                Notification({
                    title:'Successfull',
                    message:'Image uploaded Succefully!',
                    type:'success'
                })
                this.setState({...this.state,image:null,Caption:'',name:null})
            }
            else{
                this.props.Loader();
                Notification({
                    title:'Failed',
                    message:'Please make sure File size is below 1MB!',
                    type:'danger'
                })
                this.setState({...this.state,image:null,Caption:'',name:null})
            }
        })
        .catch(err=>{
            this.props.Loader();
            Notification({
            title:'Failed',
            message:'Failed to Upload Image!',
            type:'danger'
        })
        
    })
    }

    render() {
        return (
            <>
            <ReactNotification isMobile='true' breakpoint='700px'/>
                <div className="mt-5 px-2">
                
                <div className="card w-100 p-4 shadow">
                
                <div className="card-body">
                <form onSubmit={this.uploadPhoto}>
                    <div className="d-flex justify-content-between">
                    <h5 className="card-title fs-3 fw-500">Create Post</h5>
                     <div className="d-flex ">
                     <input type="file" accept="image/x-png,image/gif,image/jpeg" name="image" onChange={(e)=>this.setState({...this.state,image:e.target.files[0],name:e.target.files[0].name})} className="me-3 btn btn-outline-primary"/>
                     <button type="submit" className="btn btn-outline-success">Upload</button>
                     </div>
                    </div>
                    <input type="text" value={this.state.Caption} onChange={(e)=>this.setState({...this.state,Caption:e.target.value})}  className="form-control border-0 mt-3 px-0 shadow-none" name="username" placeholder="Enter a caption for your post..." />
                    </form>
                </div>
                </div>
            </div>
            </>
        );
    }
}

export default CreatePost;