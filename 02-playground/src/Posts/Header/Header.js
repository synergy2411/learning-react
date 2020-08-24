import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = props => {
    return (
        <ul>
            <li><Link to={{
                pathname : "/posts",
                search : "page_no=99",
                hash : "#submit"
            }}>Posts</Link></li>
            <li><Link to="/posts/new-post">New Post</Link></li>
        </ul>
    )
}

export default Header;