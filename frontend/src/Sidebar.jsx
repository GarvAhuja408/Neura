import "./Sidebar.css";

function Sidebar(){
    return (
        <section className="sidebar">
            
            <button>
                <img src="src/assets/blacklogo.png" alt="gpt logo"></img>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <ul className="history">
                <li>history 1</li>
                <li>history 1</li>
                <li>history 1</li>
                <li>history 1</li>
            </ul>

            <div className="sign">
                <p>By Garv Ahuja</p>
            </div>
        </section>
    )
}

export default Sidebar;