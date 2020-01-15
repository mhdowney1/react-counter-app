import React, { Component } from "react";

class Counter extends Component {
  // LIFECYCLE HOOK: Update Phase
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call and get new data from the server
    }
  }

  // LIFECYCLE HOOK: Unmount Phase
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  // this is the render method
  render() {
    console.log("Counter - Rendered");

    // div is the parent, with two chilren, span and button
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn m-1 btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "btn bagde m-1 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
