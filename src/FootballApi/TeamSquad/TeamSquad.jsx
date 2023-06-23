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
  Typography,
  CircularProgress,
} from "@mui/material";

import React, { Component } from "react";

import apiServices from "../../services/apiFootball";

import styles from "./styles";

import PlayerInfo from "../PlayerInfo/PlayerInfo";

export default class TeamSquad extends Component {
  state = {
    players: [],
    isPlayerOpen: false,
    selectedPlayer: null,
    isPlayersLoading: true,
    noPlayersData: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { isSquadOpen } = this.props;

    if (isSquadOpen !== prevProps.isSquadOpen && isSquadOpen) {
      const currentTeamPlayersData = await apiServices.getCurrentTeamSquad(
        this.props.teamId
      );

      if (currentTeamPlayersData.results > 0) {
        const currentTeamPlayers = currentTeamPlayersData.response[0].players;

        this.setState({
          players: currentTeamPlayers,
          isPlayersLoading: false,
          noPlayersData: false,
        });
      } else {
        this.setState({
          noPlayersData: true,
          isPlayersLoading: false,
        });
      }
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
    const {
      players,
      isPlayerOpen,
      selectedPlayer,
      isPlayersLoading,
      noPlayersData,
    } = this.state;

    return (
      <Modal open={isSquadOpen} onClose={handleClose}>
        <Box sx={styles.modalBox}>
          <Paper elevation={0} sx={styles.titlePaper}>
            <Typography variant="h4">Team squad</Typography>
          </Paper>

          {isPlayersLoading ? (
            <CircularProgress sx={styles.loadSpinner} />
          ) : (
            <Paper sx={styles.modalPaper}>
              {noPlayersData ? (
                <Typography align="center" sx={styles.noPlayersPlaceholder}>
                  No players data for selected team
                </Typography>
              ) : (
                <TableContainer sx={styles.tableContainer}>
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
                              sx={styles.playerPhoto}
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
              )}
            </Paper>
          )}

          <Button variant="outlined" onClick={handleClose} sx={styles.closeBtn}>
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
