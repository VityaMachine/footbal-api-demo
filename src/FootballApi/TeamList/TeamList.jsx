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
  CircularProgress,
} from "@mui/material";

import React, { Component } from "react";

import styles from "./styles";

import apiServices from "../../services/apiFootball";
import TeamInfo from "../TeamInfo/TeamInfo";

export default class TeamList extends Component {
  state = {
    teams: [],
    teamListLoading: false,
    selectedTeam: null,
    isOpenInfo: false,
    isSquadOpen: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.teamName !== this.props.teamName &&
      this.props.teamName.length > 0
    ) {
      this.setState({
        teams: [],
        teamListLoading: true,
      });
    }

    if (prevProps.teamName !== this.props.teamName) {
      const data = await apiServices.getTeamsByName(this.props.teamName);

      this.setState({
        teams: data.response,
        teamListLoading: false,
      });
    }
  }

  handleTeamSelect = (teamData) => {
    this.setState({
      selectedTeam: teamData,
      isOpenInfo: true,
    });
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
    const { teams, selectedTeam, isOpenInfo, teamListLoading } = this.state;

    return (
      <Container maxWidth={"xl"} sx={styles.container}>
        <Typography variant="h5" align="center">
          {teamName.length === 0 ? "Search is empty" : "Search: " + teamName}
        </Typography>

        {teamName.length > 0 && teamListLoading && (
          <CircularProgress sx={styles.spinner} />
        )}

        <Box sx={styles.contentBox}>
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
