import React, { Component } from 'react'
import ViewImage from './ViewImage';
import Cookies from 'universal-cookie';
import axios from 'axios';
import ImageComponent from './getImage';



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
                <ImageComponent id={card.imageId} card={card} showDrawer={this.showDrawer}/>
                )
            }
              
          </div>
            </>
        )
    }
}

export default Posts;