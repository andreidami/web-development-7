import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}>-</button>
        <span>My Counter: {this.props.value}</span>
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
