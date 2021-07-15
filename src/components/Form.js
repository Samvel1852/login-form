import React from "react";
import Input from "./Input";
import Submit from "./Submit";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitDisabled: false,
      isNotValid: true,
    };
  }

  handleName = (evt) => {
    this.setState({
      typedName: evt.target.value,
    });
  };

  isAllValid = () => {
    if (this.state.typedName.includes("a")) {
      this.setState({
        isNotValid: false,
      });
    }
  };

  render() {
    return (
      <div className="formDiv">
        <Input
          isNotValid={this.state.isNotValid}
          errorText={"Type valid name"}
          name="Name"
          handleName={this.handleName}
          value={this.state.typedName}
        />
        <Input
          isNotValid={this.state.isNotValid}
          errorText={"Type valid surname"}
          name="Surname"
        />
        <Input
          isNotValid={this.state.isNotValid}
          errorText={"Type valid Email"}
          name="Email"
        />
        <Input
          isNotValid={this.state.isNotValid}
          errorText={"Type valid age"}
          name="Age"
        />
        <Input
          isNotValid={this.state.isNotValid}
          errorText={"Type valid password"}
          name="Password"
        />
        <Submit
          isAllValid={this.isAllValid}
          disabled={this.state.submitDisabled}
        />
      </div>
    );
  }
}

export default Form;
