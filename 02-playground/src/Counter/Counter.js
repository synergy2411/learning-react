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
            <div className="row">
                <button className="btn btn-outline-success" 
                    onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
            </div>
          </div>
        </div>

        <hr/>
        <ul className="list-group">

            {this.props.results.map(r => {
                return <li className="list-group-item" 
                            key={Math.random()}
                            onClick={() => this.props.onDeleteItem(r)} 
                            style={{cursor : 'pointer'}}> {r} </li>
            })}
            
            
        </ul>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.ctr.counter,
    results : [...state.res.results]
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
    },
    onStoreResult : (counterValue) => {
        dispatch({type : counterActions.STORE_RESULT, value : counterValue })
    },
    onDeleteItem : (r) => {
        // dispatch({type : counterActions.DELETE_ITEM, item : r})
        dispatch(counterActions.onDeleteItem(r))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;
