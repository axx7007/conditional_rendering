import React from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { Container, Buttons, Btns } from "./style";

class Test extends React.Component {
  state = {
    isUser: false,
  };
  render() {
    return (
      <Container>
        <Buttons>
          <Btns right onClick={() => this.setState({ isUser: false })}>Login</Btns>
          <Btns onClick={() => this.setState({ isUser: true })}>Register</Btns>
        </Buttons>
        {this.state.isUser ? <SignUp /> : <SignIn />}
      </Container>
    );
  }
}
export default Test;
