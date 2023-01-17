import React from 'react';
import "./post.css";

function Post(props) {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://img.freepik.com/free-photo/african-business-male-people-shaking-hands_1303-18516.jpg?w=996&t=st=1673960809~exp=1673961409~hmac=5b0ef3d124821fb7d8028010ee212231149a2448b7af0540056181c0f4ac73fe" alt="" />

            <div className="post-info">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </span>
                <hr />
                <div className="postDate">1 hour ago</div>
            </div>
        </div>
    );
}

export default Post;