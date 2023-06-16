import {
  Box,
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import React, { Component } from "react";

import apiServices from "../../services/apiFootball";
import TeamInfo from "../TeamInfo/TeamInfo";

export default class TeamList extends Component {
  state = {
    teams: [],
    selectedTeam: null,
    isOpenInfo: false,
    isSquadOpen: false,
  };


  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.teamName !== this.props.teamName) {
      const data = await apiServices.getTeamsByName(this.props.teamName);

      this.setState({
        teams: data.response,
      });
    }
  }

  handleTeamSelect = (teamData) => {
    this.setState({
      selectedTeam: teamData,
      isOpenInfo: true,
    });

    // console.log(id);
  };

  handleInfoClose = () => {
    this.setState({
      selectedTeam: null,
      isOpenInfo: false,
    });
  };

  handleSquadOpen = () => {
    this.setState({
      isSquadOpen: true,
    });
  };

  handleSquadClose = () => {
    this.setState({
      isSquadOpen: false,
    });
  };

  render() {
    const { teamName } = this.props;
    const { teams, selectedTeam, isOpenInfo } = this.state;

    return (
      <Container
        maxWidth={"xl"}
        sx={{
          mt: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" align="center">
          {teamName.length === 0 ? "Search is empty" : "Search: " + teamName}
        </Typography>
        <Box
          sx={{
            mt: "20px",
          }}
        >
          <Paper elevation={3}>
            <List>
              {teams.map((data) => {
                return (
                  <ListItem key={data.team.id}>
                    <ListItemButton onClick={() => this.handleTeamSelect(data)}>
                      <ListItemAvatar>
                        <Avatar alt="logo" src={data.team.logo} />
                      </ListItemAvatar>
                      <ListItemText
                        id={data.team.id}
                        primary={`${data.team.name} (${data.team.country})`}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Box>

        {selectedTeam && (
          <TeamInfo
            selectedTeam={selectedTeam}
            isOpen={isOpenInfo}
            handleClose={this.handleInfoClose}
          />
        )}
      </Container>
    );
  }
}
