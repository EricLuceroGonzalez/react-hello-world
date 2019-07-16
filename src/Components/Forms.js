import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Forms extends Component {
  // To catch the form data:

  state = {
    email: "",
    password: ""
  };

  sendFormData = () => {
    console.log(this.state);
    // Send it with axios
  };

  //   To excecute onChange every input
  handleFormInputs = e => {
    //   Information is inside event.target
    console.log(e.target);
    switch (e.target.name) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        console.log("fuck off");

        break;
    }
  };

  render() {
    return (
      <Form
        className="col-md-8"
        style={{
          background: "rgba(125,250,50,0.75)",
          padding: "20px 12px",
          borderRadius: "14px",
          boxShadow: "2px 6px 8px gray",
          margin: "30px auto"
        }}
      >
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            onChange={this.handleFormInputs}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            onChange={this.handleFormInputs}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button onClick={this.sendFormData}>Submit</Button>
      </Form>
    );
  }
}

export default Forms;
