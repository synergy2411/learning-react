import React from 'react';

class Child extends React.Component{
    componentWillUnmount () {
        console.log("[Child - componentWillUnmount]");
    }
    render(){
        console.log("[Child - render]")
        return (
            <div>
                Child Loaded...
            </div>
        )
    }
}
 
// const Child = () => {
//     console.log("[CHILD - render]");
//     return (
//         <div>
//             Child Loaded...
//         </div>
//     )
// }

export default Child;