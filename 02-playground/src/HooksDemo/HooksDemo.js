import React, {useState, useEffect} from "react";

const HooksDemo = props => {
    let [counter, setCounter] = useState(101);

    useEffect(() => {
        // make XHR, Async tasks etc
        setTimeout(() => {
            console.log("Use Effect works")
        }, 1000);

        return () => {
            // write your clean-up code
            console.log("Use effect again")
        }
    })

    // componentDidMount()
    // componentWillUnmount()

    return (
        <div>
            <p>
                Counter : {counter}
            </p>
            <button className="btn btn-primary" 
                onClick={() => {setCounter(++counter)}}> + </button>
            <button className="btn btn-danger" 
                onClick={() => {setCounter(--counter)}}> - </button>
        </div>
    )
}

export default HooksDemo;