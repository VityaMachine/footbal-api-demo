import { TextField, Button, Container } from "@mui/material";
import React, { Component } from "react";

import styles from "./styles";

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
        <Container sx={styles.mainContainer} maxWidth={false}>
          <TextField
            variant="standard"
            label="Input team name"
            value={teamName}
            onChange={this.handleInputChange}
            sx={styles.textField}
          />

          <Button variant="contained" sx={styles.searchBtn} type="submit">
            Search
          </Button>
        </Container>
      </form>
    );
  }
}
