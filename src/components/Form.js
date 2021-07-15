import React from "react";
import Input from "./Input";
import Submit from "./Submit";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitDisabled: false,
      isValidName: true,
      isValidSurname: true,
      isValidEmail: true,
      isValidAge: true,
      isValidPassword: true,
      typedName: "",
      typedSurname: "",
      typedAge: "",
      typedEmail: "",
      typedPassword: "",
    };
  }

  handleName = (evt) => {
    this.setState({
      typedName: evt.target.value,
    });
  };

  handleSurname = (evt) => {
    this.setState({
      typedSurname: evt.target.value,
    });
  };

  handleEmail = (evt) => {
    this.setState({
      typedEmail: evt.target.value,
    });
  };

  handleAge = (evt) => {
    this.setState({
      typedAge: evt.target.value,
    });
  };

  handlePassword = (evt) => {
    this.setState({
      typedPassword: evt.target.value,
    });
  };

  isAllValid = () => {
    if (!this.state.typedName.match(/^[A-Za-z]+$/)) {
      this.setState({
        isValidName: false,
      });
    }
    if (!this.state.typedSurname.match(/^[A-Za-z]+$/)) {
      this.setState({
        isValidSurname: false,
      });
    }
    if (
      !this.state.typedEmail.match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      this.setState({
        isValidEmail: false,
      });
    }
    if (
      !this.state.typedAge.match(/^\d+$/) ||
      this.state.typedAge < 18 ||
      this.state.typedAge > 99
    ) {
      this.setState({
        isValidAge: false,
      });
    }
    if (
      !this.state.typedPassword.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
      )
    ) {
      this.setState({
        isValidPassword: false,
      });
    }
  };

  render() {
    return (
      <div className="formDiv">
        <Input
          // isNotValidName={this.state.isNotValidName}
          errorText={"Type valid name"}
          name="Name"
          hidden={this.state.isValidName}
          handleFn={this.handleName}
          // value={this.state.typedName}
        />
        <Input
          // isNotValid={this.state.isNotValidSurname}
          errorText={"Type valid surname"}
          name="Surname"
          hidden={this.state.isValidSurname}
          handleFn={this.handleSurname}
          // value={this.state.typedSurname}
        />
        <Input
          // isNotValid={this.state.isNotValidEmail}
          errorText={"Type valid Email"}
          name="Email"
          hidden={this.state.isValidEmail}
          handleFn={this.handleEmail}
          // value={this.state.typedEmail}
        />
        <Input
          // isNotValid={this.state.isNotValid}
          errorText={"Type valid age"}
          name="Age"
          hidden={this.state.isValidAge}
          handleFn={this.handleAge}
          // value={this.state.typedAge}
        />
        <Input
          // isNotValid={this.state.isNotValid}
          errorText={"Type valid password"}
          name="Password"
          hidden={this.state.isValidPassword}
          handleFn={this.handlePassword}
          // value={this.state.typedPassword}
        />
        <Submit
          isAllFilled={
            !this.state.typedName ||
            !this.state.typedSurname ||
            !this.state.typedEmail ||
            !this.state.typedAge ||
            !this.state.typedPassword
          }
          isAllValid={this.isAllValid}
          disabled={this.state.submitDisabled}
        />
      </div>
    );
  }
}

export default Form;
