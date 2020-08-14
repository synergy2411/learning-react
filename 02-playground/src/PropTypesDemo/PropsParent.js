import React from 'react';
import PropsChild from './PropsChild';

const PropsParent = props =>{
    const age = 32;
    const bool = true;
    const changeName = () => {};

    return (
        <div className="container">
            Props Parent
            {/* <PropsChild username= "FooBar"  */}
            <PropsChild 
                // age = {age} 
                isAdmin= {bool} 
                onChangeName = {changeName}/>
        </div>
    )
}

export default PropsParent;