import React from "react";

import {
  SignInContainer,
  Text,
  LoginInput,
  Forgot,
  ForgotText,
  LogInBtn,
  OrLogIn,
  Line,
  LineText,
  GoogleCon,
  IconG,
  IconGText,
  FacebookIcon,
} from "./style";

class SignUp extends React.Component {
  render() {
    return (
      <SignInContainer>
        <Text>Enter your username and password to login.</Text>
        <LoginInput type="text" placeholder="Username" />
        <LoginInput type="text" placeholder="Enter your email address" />
        <LoginInput type="password" placeholder="Password" />
        <LoginInput type="password" placeholder="Confirm Password" />

        <LogInBtn>Register</LogInBtn>
        <OrLogIn>
          <Line />
          <LineText>Or login with</LineText>
          <Line />
        </OrLogIn>
        <GoogleCon>
          <IconG />
          <IconGText>Login with Google</IconGText>
        </GoogleCon>
        <GoogleCon>
          <FacebookIcon />
          <IconGText>Login with Facebook</IconGText>
        </GoogleCon>
      </SignInContainer>
    );
  }
}
export default SignUp;
