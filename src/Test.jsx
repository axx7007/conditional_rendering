import React from "react";

class Test extends React.Component {
  state = {
    isUser: false,
  };
  render() {
    return (
      <div>
        {this.state.isUser ? <h1>SignUp</h1> : <h1>SignIn</h1>}
        <button onClick={() => this.setState({ isUser: !this.state.isUser })}>
          {this.state.isUser ? "Kirish" : "Ro'yxatdan o'tish"}
        </button>
      </div>
    );
  }
}
export default Test;
