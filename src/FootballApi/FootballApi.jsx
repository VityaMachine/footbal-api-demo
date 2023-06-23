import { Paper, Container, Typography } from "@mui/material";

import TeamSearchForm from "./TeamSearchForm/TeamSearchForm";

import React, { Component } from "react";
import TeamList from "./TeamList/TeamList";

export default class FootballApi extends Component {
  state = {
    teamName: "",
  };

  handleChangeTeamName = (teamName) => {
    this.setState({
      teamName,
    });
  };

  render() {
    return (
      <>
        <Paper
          sx={{
            py: "20px",
            width: "100%",
          }}
        >
          <Container disableGutters maxWidth={false}>
            <Typography variant="h4" align="center">
              Football api
            </Typography>

            <TeamSearchForm onNameChange={this.handleChangeTeamName} />

            <TeamList teamName={this.state.teamName} />
          </Container>
        </Paper>
      </>
    );
  }
}
