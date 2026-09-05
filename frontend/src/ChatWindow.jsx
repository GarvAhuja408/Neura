import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState,useEffect } from "react";
import {DotLoader} from "react-spinners"

function ChatWindow(){

    const {prompt,setPrompt,reply,setReply,currThreadId,prevChats,setPrevChats,setNewChat}=useContext(MyContext);
    const [loading,setLoading]=useState(false);


    const getReply = async()=>{

        setLoading(true);
        setNewChat(false);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message:prompt,
                threadId:currThreadId
            })
        }

    try{
        const response = await fetch("http://localhost:8080/api/chat",options);
        const res = await response.json();
        setReply(res.reply)
        console.log(res.reply);
    }
    catch(err){
        console.log(err);
    }
    setLoading(false);
}
    
//append new chat to prev chat
useEffect( ()=>{
    if( prompt && reply ){
        setPrevChats (prevChats=>(
            [...prevChats,{
                role:"user",
                content:prompt
            },{
                role:"assistant",
                content:reply
            }]
        ))
    }

    setPrompt("");
},[reply])

    return (
        <div className="chatwindow">

            <div className="navbar">
                <span>Neura <i class="fa-solid fa-chevron-down"></i></span>
                <div className="userIconDiv">
                    <span className="userIcon"><i class="fa-solid fa-user"></i></span>
                </div>
            </div>

            <Chat/>

            <DotLoader color="#ffff" loading={loading} />

            <div className="chatInput">

                <div className="inputBox">

                    <input placeholder="Ask Anything" value={prompt} onChange={(e)=> setPrompt(e.target.value)} onKeyDown={(e)=>e.key ==='Enter' ? getReply():' '}>
                        
                    </input>
                    &nbsp;&nbsp;
                    <div id="submit" onClick={getReply}>
                        <i class="fa-solid fa-paper-plane"></i>
                    </div>
                </div>

                <div>
                <p className="info">
                    Neura AI can make mistakes. Check important info. See cookie preferences
                </p>
                </div>

            </div>

        </div>
    )
}

export default ChatWindow;