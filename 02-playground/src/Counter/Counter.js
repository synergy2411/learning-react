import React, {Component}  from 'react';
import { connect } from 'react-redux';

class Counter extends Component{
    
    render(){
        return (
            <div>
                Counter : {this.props.counter}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter : state.counter
    }
}
export default connect(mapStateToProps)(Counter);
// export default Counter;


