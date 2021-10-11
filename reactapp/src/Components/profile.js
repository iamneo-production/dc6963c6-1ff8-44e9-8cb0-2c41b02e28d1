import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/profile.css';
import {HiPhotograph} from 'react-icons/hi';
import {AiFillTags} from 'react-icons/ai'

class ProfileComponent extends React.Component{
    
    render(){
        const array=[1,2,3,4,5,6,7,8,9]
        return(
            <div className="d-flex" style={{background:'#D7E2F1'}}>
            <div className="container my-5 p-5 pt-2 bg-white" style={{borderRadius:'60px'}}>
                <div className="row mx-auto mt-5 border-bottom border-dark pb-3">
                    <div className="col-6 d-flex">
                        <div className="col-3">
                        <img className="rounded-circle" style={{maxWidth:'100px',maxHeight:'100px'}} src="https://www.w3schools.com/w3images/avatar2.png" alt="profilepic"></img>
                        </div>
                        <div className="col-9 d-flex align-items-center">
                            <h2 className="login-title">Yashasvi Berbalaje</h2>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <div className="col-4">
                        <h4 className="logo-title">Posts</h4>
                        <p className="login-title" style={{wordBreak:'break-all'}}>100</p>
                        </div>
                        <div className="col-4">
                        <h4 className="logo-title">Followers</h4>
                        <p className="login-title" style={{wordBreak:'break-all'}}>100</p>
                        </div>
                        <div className="col-4">
                        <h4 className="logo-title">Following</h4>
                        <p className="login-title" style={{wordBreak:'break-all'}}>100</p>
                        </div>
                    </div>
                    

                </div>
                <div className="col-12 mt-4 border-bottom border-dark pb-2">
                        <h4 className="text-muted">Bio</h4>
                        <p className="login-title">Some random Bio,Some random Bio,Some random Bio,Some random Bio,Some random Bio,Some random Bio,Some random Bio,Some random Bio</p>
                    </div>
                <Tabs className="mt-5">
                <TabList>
                <Tab>Photos<HiPhotograph className="ms-2" style={{fontSize:'20px'}}/></Tab>
                <Tab>Tags<AiFillTags className="ms-2" style={{fontSize:'20px'}}/></Tab>
                </TabList>

                <TabPanel>
                    <div className="row">
                    {
                        array.map(im=>
                            <div className="col-4 mt-4">
                            <img style={{width:'100%',borderRadius:'20px'}} src="https://www.w3schools.com/w3images/avatar2.png" alt="profilepic"></img>
                            </div>
                            )
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="col-4 mt-4">
                            <img style={{width:'100%',borderRadius:'20px'}} src="https://www.w3schools.com/w3images/avatar2.png" alt="profilepic"></img>
                            </div>
                </TabPanel>
            </Tabs>
            </div>
            </div>
        )
    }
}

export default ProfileComponent;