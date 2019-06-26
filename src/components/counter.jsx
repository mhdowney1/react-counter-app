import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  // defining a method
  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  // this is the render method
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn m-1 btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "btn bagde m-1 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
