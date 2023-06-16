import React, { Component } from "react";

import {
  Box,
  Modal,
  Paper,
  Button,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import Brightness1Icon from "@mui/icons-material/Brightness1";

import apiServices from "../../services/apiFootball";

export default class PlayerInfo extends Component {
  state = {
    player: null,
    stats: null,
  };

  async componentDidMount() {
    const { id, number, position } = this.props.selectedPlayer;

    const playerRespData = await apiServices.getPlayerById(id);
    const playerData = playerRespData.response[0];

    const nationality = playerData.player.nationality;
    const countryRespData = await apiServices.getNationByName(nationality);
    const countryData = countryRespData.response[0];

    this.setState({
      player: {
        ...playerData.player,
        number,
        position,
        countryCode: countryData.code,
        countryFlag: countryData.flag,
      },
      stats: playerData.statistics,
    });
  }

  render() {
    const { isPlayerOpen, handleClose, selectedTeam } = this.props;
    const { player, stats } = this.state;

    const birthDate = player
      ? player.birth.date.split("-").reverse().join(".")
      : "";

    console.log(stats);
    // console.log(player);

    return (
      <Modal open={isPlayerOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1300,
            bgcolor: "background.paper",
            boxShadow: 24,
            color: "palette.text.primary",
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper sx={{ width: "100%" }}>
            <Typography
              align="center"
              variant="h5"
              sx={{
                mt: "15px",
              }}
            >
              Player info
            </Typography>

            {player && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  // px: "15px",
                  py: "20px",
                }}
              >
                {/* LEFT PART WITH IMAGES */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "200px",
                  }}
                >
                  <Box sx={{ width: "150px", height: "150px", my: "10px" }}>
                    <img
                      src={player.photo}
                      alt="player_photo"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>

                  <Box sx={{ width: "150px", height: "112px", my: "10px" }}>
                    <img
                      src={player.countryFlag}
                      alt="player_photo"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>

                  <Box sx={{ width: "150px", height: "150px", my: "10px" }}>
                    <img
                      src={selectedTeam.team.logo}
                      alt="player_photo"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                </Box>

                {/* RIGHT PART WITH TEXT */}
                <Box
                  sx={{
                    width: "1080px",
                    px: "10px",
                  }}
                >
                  {/* INFO */}
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    {/* LEFT INFO PART */}
                    <Box
                      sx={{
                        width: "50%",
                      }}
                    >
                      <Box sx={{ display: "flex", mb: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Full name:&nbsp;
                        </Typography>
                        <Typography>
                          {player.firstname}&nbsp;{player.lastname}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", mb: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Player nationality:&nbsp;
                        </Typography>
                        <Typography>{player.nationality}</Typography>
                      </Box>

                      <Box sx={{ display: "flex", mb: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Player club:&nbsp;
                        </Typography>
                        <Typography>{selectedTeam.team.name}</Typography>
                      </Box>

                      <Box sx={{ display: "flex", mb: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Player position:&nbsp;
                        </Typography>
                        <Typography>{player.position}</Typography>
                      </Box>

                      <Box sx={{ display: "flex", mb: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Player number:&nbsp;
                        </Typography>
                        <Typography>{player.number}</Typography>
                      </Box>
                    </Box>

                    {/* RIGHT INFO PART */}
                    <Box>
                      <Box sx={{ display: "flex", mb: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Birth date:&nbsp;
                        </Typography>
                        <Typography>{birthDate}</Typography>
                      </Box>

                      <Box sx={{ display: "flex", mb: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Age:&nbsp;
                        </Typography>
                        <Typography>{player.age} y.o.</Typography>
                      </Box>

                      <Box sx={{ display: "flex", mb: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Birth place:&nbsp;
                        </Typography>
                        <Typography>
                          {player.birth.country}&nbsp;
                          {player.birth.place &&
                            "," + player.birth.place.split("-").join(" ")}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", mb: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Player weight:&nbsp;
                        </Typography>
                        <Typography>{player.weight}</Typography>
                      </Box>

                      <Box sx={{ display: "flex", mb: "10px" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Player height:&nbsp;
                        </Typography>
                        <Typography>{player.height}</Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* STATS */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mt: "20px",
                      mb: "10px",

                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      Current season played:&nbsp;
                    </Typography>

                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Tournament</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell align="center">Games (lineups)</TableCell>
                            <TableCell align="center">Min's played</TableCell>
                            <TableCell align="center">Goals</TableCell>
                            <TableCell align="center">Assist</TableCell>
                            <TableCell align="center">AVG Rating</TableCell>
                            <TableCell align="center">Yellow cards</TableCell>
                            <TableCell align="center">Red cards</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            stats.map(el => <TableRow key={el.league.id + el.team.id}>


                            <TableCell>{el.league.name}&nbsp;({el.league.country})</TableCell>
                            <TableCell>{el.team.name}</TableCell>
                            <TableCell align="center">{el.games.appearences}&nbsp;({el.games.lineups})</TableCell>
                            <TableCell align="center">{el.games.minutes}</TableCell>
                            <TableCell align="center">{el.goals.total}</TableCell>
                            <TableCell align="center">{el.goals.assists ? el.goals.assists : 0}</TableCell>
                            <TableCell align="center">{el.games.rating ? Number(el.games.rating).toFixed(2) : "no data"}</TableCell>
                            <TableCell align="center">{el.cards.yellow}</TableCell>
                            <TableCell align="center">{el.cards.red}</TableCell>


                            </TableRow>)


                          }
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Box>
              </Box>
            )}
          </Paper>

          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{
              mt: "20px",
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    );
  }
}
