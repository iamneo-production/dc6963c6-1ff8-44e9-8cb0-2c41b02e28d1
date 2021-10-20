import React,{useState,useEffect} from 'react';
import Cookies from 'universal-cookie';
import { Card, Avatar } from 'antd';
import axios from 'axios';
import { CommentOutlined, EyeOutlined, HeartOutlined } from '@ant-design/icons';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {Notification} from './notifications';
import '../css/index.css';
import 'antd/dist/antd.css';
const { Meta } = Card;
function ImageComponent(props) {
    const [id, setId] = useState();
    const [img,setImg]=useState()
    console.log(props.card)

    const AddLike=(data)=>{
      console.log(data)
      const cookie=new Cookies()
      var bodyFormData=new FormData();
        bodyFormData.append('imageId',data)
        bodyFormData.append('userId',cookie.get('id'))
      axios({
        method:'POST',
        url:'https://8080-aaaabbfaadfcfeaadebaabbeabfac.examlyiopb.examly.io/addLikes',
        headers:{
            "Content-Type": "application/json",
             Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
            'Authorization':`Bearer ${cookie.get('tkn')}`
          },
          data:bodyFormData
    })
    .then(res=>{
      Notification({
        title:'Successfull',
        message:'Liked!',
        type:'success'
    })
      window.location.reload()})
    }

    useEffect(() => {
        let cookie=new Cookies();
      setId(props.id);
      fetch('https://8080-aaaabbfaadfcfeaadebaabbeabfac.examlyiopb.examly.io/image', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Authorization':`Bearer ${cookie.get('tkn')}`,
        'imageID':props.id
      }
    })
    .then(response => response.blob())
    .then(imageBlob => {
        // Then create a local URL for that image and print it 
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL)
      })
    .catch(err => console.log(err))
    }, []);
  
    return (
      <>
      <ReactNotification isMobile='true' breakpoint='700px'/>
      <div className="col-4 mb-4">
              <Card
            className="shadow"
            style={{ width: "100%" }}
            cover={
              <img
                className="cardImg"
                alt="Loading..."
                src={img}
              />
            }
            actions={[
              <HeartOutlined onClick={()=>AddLike(props.card.imageId) }  className="fs-4"/>,
              <CommentOutlined onClick={()=>props.showDrawer({...props.card,img})} className="fs-4"/>,
              <EyeOutlined onClick={()=>props.showDrawer({...props.card,img})} className="fs-4"/>,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={props.card.user}
            />
          </Card>
              </div>
      </>
    )
  }

  export default ImageComponent;