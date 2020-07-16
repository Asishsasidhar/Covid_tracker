import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    console.log("inside constructor ", this.inputRef);
  }
  componentDidMount() {
    console.log("inside did Mount ", this.inputRef);
  }
  render() {
    console.log("inside render ", this.inputRef);
    return <input type="text" ref={this.inputRef} />;
  }
}

export default RefsDemo;