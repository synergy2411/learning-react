import React from 'react';
import PropTypes from 'prop-types';
import PropsParent from './PropsParent';

class PropsChild extends React.Component{

    render(){
        return (
            <div>
                <p>Username : {this.props.username}</p>
                <p>Age : {this.props.age}</p>
        <p>Is User Admin ?  { this.props.isAdmin}</p>
            </div>
        )
    }

}

PropsChild.propTypes = {
    username : PropTypes.string,
    age : PropTypes.number.isRequired,
    isAdmin : PropTypes.bool,
    onChangeName : PropTypes.func
}

PropsChild.defaultProps = {
    username : "Stranger"
}


export default PropsChild;