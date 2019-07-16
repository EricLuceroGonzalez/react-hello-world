import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Forms extends Component {
  // To catch the form data:

  state = {};
  render() {
    return (
      <Form className="col-md-8"
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
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Forms;
