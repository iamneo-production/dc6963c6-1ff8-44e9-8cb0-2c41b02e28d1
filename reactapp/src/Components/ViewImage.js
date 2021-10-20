import React from 'react';
import { Drawer } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/profile.css';

class ViewImage extends React.Component {
  
    render() {
        const array=[1,2,3,4,5,6,7,8,9]
      return (
        <>
          <Drawer
            title={
                <>
                <h2>{this.props.postData.name}</h2>
                <p className='pb-0 mb-0'>fbfhfghfgjgfjhgjgjhk</p>
                </>
            }
            placement='right'
            size='large'
            closable={false}
            onClose={this.props.onClose}
            visible={this.props.showDrawer}
            key='placement'
            footer={
                <div className='d-flex'>
                <input type="text"  className="form-control py-3 shadow-none me-3" name="username" placeholder="Add Comment..." />
                <button type="button" class="btn btn-outline-success">Send</button>
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
                        array.map(im=>
                            <div className="col-12 d-flex align-items-center mb-3">
                            <div className="rounded-circle me-3 fs-4 d-flex text-white justify-content-center align-items-center" style={{width:'40px',height:'40px',background:'#7952B3'}}> S</div>
                            <p className="mb-0 ">Shubham Singh</p>
                            </div>
                            )
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="row mt-4">
                    {
                        array.map(im=>
                            <div className="col-12 d-flex align-items-center mb-3">
                            <div className="rounded-circle me-3 fs-4 d-flex text-white justify-content-center align-items-center" style={{width:'40px',height:'40px',background:'#7952B3'}}> S</div>
                            <p className="mb-0 ">Shubham Singh</p>
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