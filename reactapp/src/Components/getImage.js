import React,{useState,useEffect} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Card, Avatar } from 'antd';
import { CommentOutlined, EyeOutlined, HeartOutlined } from '@ant-design/icons';

import '../css/index.css';
import 'antd/dist/antd.css';
const { Meta } = Card;
function ImageComponent(props) {
    const [id, setId] = useState();
    const [base64,setBase64]=useState()
  
    useEffect(() => {
        let cookie=new Cookies();
      setId(props.id);
      axios({
        method:'POST',
        url:'https://8080-aaaabbfaadfcfeaadebaabbeabfac.examlyiopb.examly.io/image',
        headers:{
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Authorization':`Bearer ${cookie.get('tkn')}`,
            'imageID':props.id
          },
          data:{
              imageId:props.id
          }
    })
    .then(res=>setBase64(Buffer.from(res.data, "binary").toString("base64")))
    .catch(err=>console.log(err))
    }, [props.id,base64]);
  
    return (
      <>
      <div className="col-4">
              <Card
            className="shadow"
            style={{ width: "100%" }}
            cover={
              <img
                className="cardImg"
                alt="example"
                src={`data:image/jpeg;charset=utf-8;base64,${base64}`}
              />
            }
            actions={[
              <HeartOutlined  className="fs-4"/>,
              <CommentOutlined onClick={()=>props.showDrawer(props.card)} className="fs-4"/>,
              <EyeOutlined onClick={()=>props.showDrawer(props.card)} className="fs-4"/>,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={props.card.name}
            />
          </Card>
              </div>
      </>
    )
  }

  export default ImageComponent;