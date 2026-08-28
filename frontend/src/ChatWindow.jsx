import "./ChatWindow.css";
import Chat from "./Chat.jsx";

function ChatWindow(){
    return (
        <div className="chatwindow">

            <div className="navbar">
                <span>Neura <i class="fa-solid fa-chevron-down"></i></span>
                <div className="userIconDiv">
                    <span className="userIcon"><i class="fa-solid fa-user"></i></span>
                </div>
            </div>

            <Chat/>

            <div className="chatInput">

                <div className="inputBox">

                    <input placeholder="Ask Anything">
                    </input>
                    &nbsp;&nbsp;
                    <div id="submit">
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