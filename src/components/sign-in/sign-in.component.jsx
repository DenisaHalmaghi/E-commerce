import "./sign-in.styles.scss";

import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      alert(error.message);
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="E-mail"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
