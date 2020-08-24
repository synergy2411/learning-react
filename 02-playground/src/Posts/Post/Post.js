import React from 'react';

const Post = props =>{
    const style = {
        cursor : 'pointer'
    }
    return (
        
            <div className="card" style={style} onClick= {props.onHandleClick}>
                <p>{props.title}</p>
            </div>
        
    )
}

export default Post;