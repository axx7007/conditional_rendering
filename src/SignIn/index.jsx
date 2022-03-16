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
class SignIn extends React.Component {
  render() {
    return (
      <SignInContainer>
        <Text>Enter your username and password to login.</Text>
        <LoginInput type="text" placeholder="almamun_uxui@outlook.com" />
        <LoginInput type="password" placeholder="*********" />
        <Forgot>
          <ForgotText>Forgot Password?</ForgotText>
        </Forgot>
        <LogInBtn>Login</LogInBtn>
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
export default SignIn;
