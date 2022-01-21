import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      display: "",
      email: "",
      password: "",
      confrimPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confrimPassword } = this.state;

    if (password !== confrimPassword) {
      alert("passwords dont math");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        display: "",
        email: "",
        password: "",
        confrimPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confrimPassword } = this.state;
    return (
      <div className="sign-uo">
        <h2 className="title">Ido not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onsubmit={this.handleSbmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            require
          ></FormInput>
          <FormInput
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            require
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            require
          ></FormInput>
          <FormInput
            type="password"
            name="confrimPassword"
            value={confrimPassword}
            onChange={this.handleChange}
            label="confirmPassword"
            require
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
