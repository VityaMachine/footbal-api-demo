import {
  Box,
  Modal,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Button,
} from "@mui/material";

import React, { Component } from "react";

import apiServices from "../../services/apiFootball";
import PlayerInfo from "../PlayerInfo/PlayerInfo";

export default class TeamSquad extends Component {
  state = {
    players: [],
    isPlayerOpen: false,
    selectedPlayer: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { isSquadOpen } = this.props;

    if (isSquadOpen !== prevProps.isSquadOpen && isSquadOpen) {
      const currentTeamPlayersData = await apiServices.getCurrentTeamSquad(
        this.props.teamId
      );
      const currentTeamPlayers = currentTeamPlayersData.response[0].players;

      this.setState({
        players: currentTeamPlayers,
      });
    }
  }

  handlePlayerClose = () => {
    this.setState({
      isPlayerOpen: false,
      selectedPlayer: null,
    });
  };

  handlePlayerOpen = (player) => {
    this.setState({
      isPlayerOpen: true,
      selectedPlayer: player,
    });
  };

  columns = [
    { id: "number", label: "Number", minWidth: 50, align: "left" },
    { id: "photo", label: "Player phoro", minWidth: 150, align: "left" },
    { id: "name", label: "Player name", minWidth: 150, align: "left" },
    { id: "position", label: "Position", minWidth: 100, align: "left" },
    { id: "details", label: "Detailed info", minWidth: 100, align: "left" },
  ];

  render() {
    const { isSquadOpen, handleClose, selectedTeam } = this.props;
    const { players, isPlayerOpen, selectedPlayer } = this.state;

    return (
      <Modal open={isSquadOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            boxShadow: 24,
            color: "palette.text.primary",
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 500 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {this.columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {players.map((player) => (
                    <TableRow key={player.id}>
                      <TableCell align="center">{player.number}</TableCell>
                      <TableCell>
                        <Avatar
                          alt="player photo"
                          src={player.photo}
                          sx={{ width: "100px", height: "100px" }}
                        />
                      </TableCell>
                      <TableCell>{player.name}</TableCell>
                      <TableCell>{player.position}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          onClick={() => this.handlePlayerOpen(player)}
                        >
                          Show more
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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

          {selectedPlayer && (
            <PlayerInfo
              isPlayerOpen={isPlayerOpen}
              handleClose={this.handlePlayerClose}
              selectedPlayer={selectedPlayer}
              selectedTeam={selectedTeam}
            />
          )}
        </Box>
      </Modal>
    );
  }
}
