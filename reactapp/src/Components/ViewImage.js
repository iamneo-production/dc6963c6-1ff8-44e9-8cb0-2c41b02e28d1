import React from 'react';
import { Drawer } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/profile.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {Notification} from './notifications';

class ViewImage extends React.Component {
    constructor(props){
      super(props);
      this.state={
        comment:''
      }
    }

    AddComent=(e)=>{
      e.preventDefault();
      const cookie=new Cookies()
      var bodyFormData=new FormData();
        bodyFormData.append('imageId',this.props.postData.imageId)
        bodyFormData.append('userId',cookie.get('id'))
        bodyFormData.append('comment',this.state.comment)
      if(this.state.comment.trim()===""){
        console.log("error")
      }
      else{
        axios({
          method:'POST',
          url:'https://8080-aaaabbfaadfcfeaadebaabbeabfac.examlyiopb.examly.io/addComment',
          headers:{
              "Content-Type": "multipart/form-data",
               Accept: "application/json",
              'Access-Control-Allow-Origin': '*',
              'Authorization':`Bearer ${cookie.get('tkn')}`
            },
            data:bodyFormData
      })
      .then(res=>{
        Notification({
          title:'Successfull',
          message:'Commented Succefully!',
          type:'success'
      })
      window.location.reload()
      })
      }

    }
    render() {
      return (
        <>
        <ReactNotification isMobile='true' breakpoint='700px'/>
          <Drawer
            title={
                <>
                <h5>{this.props.postData.imageName}</h5>
                <p className='pb-0 mb-0'>{this.props.postData.imageTag}</p>
                </>
            }
            placement='right'
            size='large'
            closable={false}
            onClose={this.props.onClose}
            visible={this.props.showDrawer}
            key='placement'
            footer={
                <div >
                  <form onSubmit={this.AddComent} className='d-flex'>
                  <input value={this.state.comment} onChange={(e)=>this.setState({...this.state,comment:e.target.value})} type="text"  className="form-control py-3 shadow-none me-3" name="username" placeholder="Add Comment..." />
                  <button type="submit" class="btn btn-outline-success">Send</button>
                  </form>
                
                </div>
            }
          >
              <>
              <div className="text-center">
            <img
            style={{maxHeight:'300px',objectFit:'fill'}}
                className="cardImg w-75"
                alt="example"
                src={this.props.postData.img}
              />
              </div>
              <div className=' d-flex justify-content-center'>
              <Tabs className="mt-5 w-75">
                <TabList>
                <Tab>Likes</Tab>
                <Tab>Comments</Tab>
                </TabList>

                <TabPanel>
                    <div className="row mt-4">
                    {
                        this.props.postData.likes&&<h4>Total Likes:{this.props.postData.likes.length}</h4>
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="row mt-4">
                    {
                        this.props.postData.comments&&this.props.postData.comments.map(im=>
                            <div className="col-12 d-flex align-items-center mb-3">
                            <div className="rounded-circle me-3 fs-4 d-flex text-white justify-content-center align-items-center" style={{width:'40px',height:'40px',background:'#7952B3'}}> S</div>
                            <p className="mb-0 ">{im.comment}</p>
                            </div>
                            )
                    }
                    </div>
                </TabPanel>
            </Tabs>
            
              </div>
              
            </>
          </Drawer>
        </>
      );
    }
  }

export default ViewImage;