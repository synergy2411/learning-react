import React, { Component } from "react";
import { connect } from "react-redux";
import * as counterActions from './store/actions/counterActions';

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card card-header">
            <p className="text-center display-4">
              Counter : {this.props.counter}
            </p>
          </div>
          <div className="card card-body">
            <div className="btn-group">
              <button
                className="btn btn-outline-primary"
                onClick={this.props.onIncrease}
              >
                Increase
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={this.props.onDecrease}
              >
                Decrease
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => this.props.onAdd(10)}
              >
                Add by 10
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => this.props.onSubstract(5)}
              >
                Substract by 5
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: () => {
      dispatch({type : counterActions.INCREMENT});
    },
    onDecrease: () => {
      dispatch({ type: "DECREMENT" });
    },
    onAdd : (value) => {dispatch({type : counterActions.ADD_COUNTER, value})},
    onSubstract : value => {
        dispatch(counterActions.onSubstract(value))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;
