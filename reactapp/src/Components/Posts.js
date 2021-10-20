import React, { Component } from 'react'
import { Card, Avatar } from 'antd';
import { CommentOutlined, EyeOutlined, HeartOutlined } from '@ant-design/icons';
import '../css/index.css';
import 'antd/dist/antd.css';
import ViewImage from './ViewImage';
import Cookies from 'universal-cookie';
import axios from 'axios';
const { Meta } = Card;


class Posts extends Component{
    constructor(props){
        super(props);
        this.state={
            visible: false, 
            postData:{},
            posts:[]
        }
    }
    showDrawer = (Data) => {
      this.setState({
        ...this.state,
        postData:Data,
        visible: true,
      });
    };
    
    onClose = () => {
      this.setState({
        ...this.state,
        postData:{},
        visible: false,
      });
    };

     componentDidMount(){
        const cookie=new Cookies();
        axios({
            method:'GET',
            url:'https://8080-aaaabbfaadfcfeaadebaabbeabfac.examlyiopb.examly.io/getImage',
            headers:{
                "Content-Type": "multipart/form-data",
                 Accept: "application/json",
                'Access-Control-Allow-Origin': '*',
                'Authorization':`Bearer ${cookie.get('tkn')}`
              },
        })
        .then(res=>{
            this.setState({...this.state,posts:res.data})
        })
        .catch(err=>
            window.Location="/signin"
            )
    }

    render(){
      console.log(this.state)
        return(
            <>
            <ViewImage showDrawer={this.state.visible} postData={this.state.postData} onClose={this.onClose} PostData={this.state.postData}/>
          <div className="row mx-0">
            {
              this.state.posts.map(card=>
                <div className="col-4">
              <Card
            className="shadow"
            style={{ width: "100%" }}
            cover={
              <img
                className="cardImg"
                alt="example"
                src={card.img}
              />
            }
            actions={[
              <HeartOutlined  className="fs-4"/>,
              <CommentOutlined onClick={()=>this.showDrawer(card)} className="fs-4"/>,
              <EyeOutlined onClick={()=>this.showDrawer(card)} className="fs-4"/>,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={card.name}
            />
          </Card>
              </div>
                )
            }
              
          </div>
            </>
        )
    }
}

export default Posts;