import "./Chat.css";
import { useContext } from "react";
import { MyContext } from "./MyContext";

import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/github-dark.css";


function Chat(){

    const{newChat,prevChats} = useContext(MyContext);

    return (
        <>
        {newChat && <h2>Start a chat</h2>}
        <div className="chats">
            {
                prevChats?.map((chat,idx)=>
                    <div className={chat.role==="user"? "userDiv" :"gptDiv"} key={idx}>
                        {
                            chat.role==="user"? 
                            <p className="userMessage"> {chat.content}</p>:
                            <Markdown rehypePlugins={[rehypeHighlight]}>
                                        {chat.content}
                                    </Markdown>
                        }
                    </div>
                )
            }
            
        </div>
        </>
    )
}

export default Chat;