import { useState } from "react";
import '../css/UploadImage.css'
import profileImage from  '../profile_img_placeholder.svg'
import { Component } from "react";
import axios from 'axios'
class UploadImage extends Component{
    state={
        selectedFile:null,
        imagename:null,
        image_preview: '',
        caption:'',
    }

    fileSelectedHandler=e=>{
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];

        console.log(e.target.files[0].name);
        this.setState({selectedFile:image_as_files,image_preview:image_as_base64,imagename:e.target.files[0].name})
    }
    getCaption=(e)=>{


        this.state.caption=e.target.value;
    }
    fileUploadHandler=()=>{

        if(this.state.selectedFile!=null){
            let formData = new FormData();
            formData.append('imageFile', this.state.selectedFile);
            formData.append('imageTag',this.state.caption);
            formData.append('imageName',this.state.imagename);
            formData.append('userId',"shubham@gmail.com")
            axios.post("http://localhost:8080/addImage",formData,{

                headers: {
                   
                    "Content-type": "application/json",
                },

            }).then(response=>{console.log(response)})


        }


        

    }

render(){
return (

    <>
    <div className="UploadImage">
        <img className="UserImage" src={profileImage} />
        <span className="userName">Shubham Singh</span>
        <input classname="UploadFile"  style={{
            float:'left',
            marginTop:"10%"
        }}type="file" onChange={this.fileSelectedHandler} accept="image/*"/>

<div className="imagePreviwer">

                
            
<img  className="previewImage" src={ this.state.image_preview}/>

</div> 
{/* <span style={{marginTop:"10%"}}>Add Caption</span> */}
<textarea   style={{
    marginTop:"45%",
    height:"10%",
    width:"80%",
    marginLeft:"5%",
    overflowY:"scroll"

}} className="postCommentText" onChange={this.getCaption}/>

<button  style={{
    height:"5%",
    width:"20%",
marginTop:"30%",
background:"#188AFA",
border:  '#188AFA',
outline:  '#188AFA',
borderRadius:"2%",
fontSize:"100%",
fontFamily:"Sarala",
color:"#000000"


}} onClick={this.fileUploadHandler}>Upload Image</button>

    </div>
    </>
);
}

}

export default UploadImage;