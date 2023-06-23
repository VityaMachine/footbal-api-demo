import React, { Component } from "react";

import { Box, Typography, Modal, Button } from "@mui/material";

import styles from "./styles";

import TeamSquad from "../TeamSquad/TeamSquad";

export default class TeamInfo extends Component {
  state = {
    isSquadOpen: false,
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
    const { selectedTeam, isOpen, handleClose } = this.props;
    const { isSquadOpen } = this.state;

    const textData = [
      { key: "Name", value: selectedTeam.team.name },
      { key: "Short name", value: selectedTeam.team.code },
      { key: "Country", value: selectedTeam.team.country },
      { key: "Founded", value: selectedTeam.team.founded },
      { key: "Stadium", value: selectedTeam.venue.name },
      { key: "Capacity", value: selectedTeam.venue.capacity },
      { key: "City", value: selectedTeam.venue.city },
    ];

    return (
      <Modal open={isOpen} onClose={handleClose} disablePortal keepMounted>
        <Box sx={styles.mainBox}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: "30px",
            }}
          >
            Team info
          </Typography>

          <Box sx={styles.contentBox}>
            <Box sx={styles.teamBox}>
              <Box sx={styles.textAndLogoBox}>
                <Box sx={styles.logoBox}>
                  <img
                    src={selectedTeam.team.logo}
                    alt="logo"
                    style={styles.logo}
                  />
                </Box>

                <Box sx={styles.textBox}>
                  {textData.map((el) => (
                    <Box key={el.key} sx={styles.textLineBox}>
                      <Typography sx={styles.textKey}>
                        {el.key}:&nbsp;
                      </Typography>
                      <Typography>{el.value}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={styles.controlsBox}>
                <Button variant="outlined" onClick={this.handleSquadOpen}>
                  Show team squad
                </Button>

                <Button variant="outlined" color="error" onClick={handleClose}>
                  Close info page
                </Button>
              </Box>
            </Box>

            {/* Arena */}
            <Box sx={styles.arenaImgBox}>
              <img
                src={selectedTeam.venue.image}
                style={styles.arenaImg}
                alt="arena"
              />
            </Box>
          </Box>

          <TeamSquad
            isSquadOpen={isSquadOpen}
            handleOpen={this.handleSquadOpen}
            handleClose={this.handleSquadClose}
            teamId={selectedTeam.team.id}
            isInfoOpen={isOpen}
            selectedTeam={selectedTeam}
          />
        </Box>
      </Modal>
    );
  }
}
