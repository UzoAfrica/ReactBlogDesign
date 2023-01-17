import React from 'react';
import "./sidebar.css"


function Sidebar(props) {
    return (
        <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle"> ABOUT ME</span>
                    <hr />
                    <img 
                    className= "sidebarImg"
                    src="https://jenmulligandesign.com/wp-content/uploads/2017/04/unsplash-free-stock-photos-download.jpg" alt="" />

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eligendi 
                        obcaecati dolorem repudiandae cupiditate vero dicta 
                    </p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGOIES</span>
                    <ul>
                        <li className="sidebarListItem">Lifed</li>
                        <li className="sidebarListItem">Music</li>
                        <li className="sidebarListItem">Style</li>
                        <li className="sidebarListItem">Sport</li>
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Cinema</li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                    <i className= "sidebarIcon fab fa-facebook-square"></i>
                    <i className= "sidebarIcon fab fa-twitter-square"></i>
                    <i className= "sidebarIcon fab fa-pinterest-square"></i>
                    <i className= "sidebarIcon fab fa-instagram-square"></i>
                    </div>
                    </div>
            </div>
    );
}

export default Sidebar;