import React from 'react';

class LifeCycleDemo extends React.Component{
    constructor(){
        super()
        console.log("[constructor]");
        this.state = {
            counter : 0
        }
        this.onDecrease = this.onDecrease.bind(this);
    }
    componentDidMount(){
        console.log("[componentDidMount]");
    }
    componentDidUpdate(){
        console.log("[componentDidUpdate]");
    }
    componentWillUnmount(){}

    onIncrease = (event, id) => {
        // this.state.counter++;
        console.log("Event Target : ", event.target);
        console.log("ID : ", id)
        this.setState({
            counter : this.state.counter + 1
        })
    }
    onDecrease(){
        console.log("DECREASE")
        this.setState({
            counter : this.state.counter -1
        })
    }

    render(){
        console.log("[render]")
        return (
            <div>
                <p>Life Cycle is in progress...</p>
                <p>Counter : {this.state.counter} </p>
                  <button onClick = {(event) => this.onIncrease(event, 99)} >Increase</button>  
                  {/* <button onClick = {this.onDecrease.bind(this)} >Decrease</button>   */}
                  <button onClick = {this.onDecrease} >Decrease</button>  
            </div>

        )
    }
}

export default LifeCycleDemo;