import React, { Component } from "react";

import {
  Box,
  Modal,
  Paper,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

import apiServices from "../../services/apiFootball";

import styles from "./styles";

import PlayerGraphics from "./PlayerGraphics";
import PlayerData from "./PlayerData";

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

    return (
      <Modal open={isPlayerOpen} onClose={handleClose}>
        <Box sx={styles.modalBox}>
          <Paper sx={styles.modalPaper}>
            <Typography align="center" variant="h5" sx={styles.title}>
              Player info
            </Typography>

            {player ? (
              <Box sx={styles.playerBox}>
                <PlayerGraphics player={player} selectedTeam={selectedTeam} />
                <PlayerData
                  player={player}
                  selectedTeam={selectedTeam}
                  stats={stats}
                />
              </Box>
            ) : (
              <Box sx={styles.loadSpinnerBox}>
                <CircularProgress />
              </Box>
            )}
          </Paper>

          <Button variant="outlined" onClick={handleClose} sx={styles.closeBtn}>
            Close
          </Button>
        </Box>
      </Modal>
    );
  }
}
