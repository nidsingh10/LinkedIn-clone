import React , {useEffect,useState } from "react";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import "./Posts.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import Axios from "axios";

function Post({ name, description, message, photoUrl})
{

     const[posts, setPosts] = useState([])
    
    const getPosts=()=>{
        Axios.get("http://localhost:9000/api/get")
        .then((res) => {
            // setPosts(res.data[0])
            console.log("response",res.data)
            let responseData = res.data
            console.log("check data",responseData)
            // name = res.data.name
            // message = res.data.text
        })
    }

    useEffect(() => {
        getPosts()
    },[])

    // Axios.post("http://localhost:9000/api/post",{
    //   name,
    //   description,
    //   message
    // }).then(res => console.log("Posting data",res)).catch(err => console.log(err))

    // const Users = () => {
    //     const data = [
    //       { id: 1, name: "John Doe" },
    //       { id: 2, name: "Victor Wayne" },
    //       { id: 3, name: "Jane Doe" },
    //     ];
      
       return (
    //       <div className="users">
    //         {Users.data.map((user) => (
    //           <div className="user">{user}</div>
    //         ))}
    //       </div>
    //     );
    //   };
        
         <div>
             {
                 //responseData.map((post) => {
            
                // responseData.map((post) => {
                    <div className="post">
                        <div className="post_header">
                            <Avatar />
                            
                                    <div className="post_info">
                                    <h2>{name}</h2>
                                    <p>{description}</p>
                                </div>
                              
                        </div>
                        <div className = "post_body">
                             { <p>{message}</p> }

                        </div>
                        <div className="post_buttons">
                            <InputOption Icon = {ThumbUpIcon} title = "Like" color = "grey" />
                            <InputOption Icon = {ChatBubbleIcon} title = "Comment" color = "grey"/>
                            <InputOption Icon = {ShareIcon} title = "Share" color = "grey"/>
                            <InputOption Icon = {SendIcon } title = "Send" color = "grey"/>
                        </div>
                    </div>      
                //}
                
            }
          </div>
       )
    }
export default Post;