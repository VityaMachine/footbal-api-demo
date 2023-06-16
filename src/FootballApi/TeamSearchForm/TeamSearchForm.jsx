import { TextField,  Button, Container } from "@mui/material";
import React, { Component } from "react";

export default class TeamSearchForm extends Component {
  state = {
    teamName: "",
  };

  handleInputChange = (e) => {
    this.setState({
      teamName: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.teamName.trim() === "") {
      alert("input team name");
      return;
    }
    this.props.onNameChange(this.state.teamName.toLowerCase());

    this.setState({
      teamName: "",
    });
  };

  render() {
    const { teamName } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            justifyContent: "center",
            gap: "20px",
          }}
          maxWidth={false}
        >
          <TextField
            variant="standard"
            label="Input team name"
            value={teamName}
            onChange={this.handleInputChange}
            sx={{
                width: "300px"
            }}
          />

          <Button
            variant="contained"
            sx={{
              width: "100px",
            }}
            type="submit"
          >
            Search
          </Button>
        </Container>
      </form>
    );
  }
}
