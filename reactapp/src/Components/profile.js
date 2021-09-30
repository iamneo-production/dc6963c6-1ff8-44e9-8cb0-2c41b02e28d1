import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class ProfileComponent extends React.Component{
    
    render(){
        const array=[1,2,3,4,5,6,7,8,9]
        return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6 d-flex">
                        <div className="col-3">
                        <img className="rounded-circle" style={{maxWidth:'100px',maxHeight:'100px'}} src="https://www.w3schools.com/w3images/avatar2.png" alt="profilepic"></img>
                        </div>
                        <div className="col-9 d-flex align-items-center">
                            <h2>Yashasvi Berbalaje</h2>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <div className="col-4">
                        <h4>Posts</h4>
                        <p style={{wordBreak:'break-all'}}>100</p>
                        </div>
                        <div className="col-4">
                        <h4>Followers</h4>
                        <p style={{wordBreak:'break-all'}}>100</p>
                        </div>
                        <div className="col-4">
                        <h4>Following</h4>
                        <p style={{wordBreak:'break-all'}}>100</p>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <h6>Bio</h6>
                        <p>Some random Bio,Some random Bio,Some random Bio,Some random Bio,Some random Bio,Some random Bio,Some random Bio,Some random Bio</p>
                    </div>

                </div>
                <Tabs>
                <TabList>
                <Tab>Photos</Tab>
                <Tab>Vedios</Tab>
                <Tab>Tags</Tab>
                </TabList>

                <TabPanel>
                    <div className="row">
                    {
                        array.map(im=>
                            <div className="col-4 mt-4">
                            <img style={{width:'100%'}} src="https://www.w3schools.com/w3images/avatar2.png" alt="profilepic"></img>
                            </div>
                            )
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            </div>
        )
    }
}

export default ProfileComponent;