import "./Sidebar.css";

function Sidebar(){
    return (
        <section className="sidebar">
            
            <button>
                <img src="src/assets/blacklogo.png" alt="gpt logo" className="logo"></img>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
            </button>

            <ul className="history">
                <li>Thread 1</li>
                <li>Thread 2</li>
                <li>Thread 3</li>
                <li>Thread 4</li>
            </ul>

            <div className="sign">
                <p>By Garv Ahuja</p>
            </div>
        </section>
    )
}

export default Sidebar;