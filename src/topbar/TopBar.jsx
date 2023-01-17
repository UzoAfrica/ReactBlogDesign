import "./topbar.css";

export default function TopBar(){
    return (
        <div className="top">
            <div className="topLeft"> 
            <i className= "topIcon fab fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            
            <i class="fa-brands fa-twitter"></i>
            </div>
            TopBarff
            
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <i class="fa-solid fa-magnifying-glass"></i>

            </div>
        </div>
       
    )
}