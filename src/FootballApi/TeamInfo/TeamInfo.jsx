import { Box, Typography, Modal, Button } from "@mui/material";

import React, { Component } from "react";

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

    return (
      <Modal open={isOpen} onClose={handleClose} disablePortal keepMounted>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            bgcolor: "background.paper",
            boxShadow: 24,
            color: "palette.text.primary",
            p: 4,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: "30px",
            }}
          >
            Team info
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: 450,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {/* ! Logo */}
                <Box
                  sx={{
                    width: 150,
                    height: 150,
                  }}
                >
                  <img
                    src={selectedTeam.team.logo}
                    alt="logo"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>

                {/* TextInfo */}
                <Box sx={{ px: "20px", width: "260px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Name:&nbsp;
                    </Typography>
                    <Typography>{selectedTeam.team.name}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Short name:&nbsp;
                    </Typography>
                    <Typography>{selectedTeam.team.code}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Country:&nbsp;
                    </Typography>
                    <Typography>{selectedTeam.team.country}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Founded:&nbsp;
                    </Typography>
                    <Typography>{selectedTeam.team.founded}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Stadium:&nbsp;
                    </Typography>
                    <Typography>{selectedTeam.venue.name}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Capacity:&nbsp;
                    </Typography>
                    <Typography>{selectedTeam.venue.capacity}</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      City:&nbsp;
                    </Typography>
                    <Typography>{selectedTeam.venue.city}</Typography>
                  </Box>
                </Box>
              </Box>

              {/* Controls*/}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: 350,
                }}
              >
                <Button variant="outlined" onClick={this.handleSquadOpen}>
                  Show team squad
                </Button>

                <Button variant="outlined" color="error" onClick={handleClose}>
                  Close info page
                </Button>
              </Box>
            </Box>

            {/* Arena */}
            <Box
              sx={{
                width: 450,
                height: 338,
              }}
            >
              <img
                src={selectedTeam.venue.image}
                style={{
                  width: "100%",
                  height: "100%",
                }}
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
