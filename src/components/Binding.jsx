import React from "react";

class Binding extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <input
            type="text"
            value={this.state.value}
            onChange={(event) => {
              this.setState({ value: event.target.value });
            }}
          />
          <h1>{this.state.value}</h1>
        </div>
      </>
    );
  }
}

export default Binding;
