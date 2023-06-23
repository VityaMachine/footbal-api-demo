import { Box } from "@mui/material";

import styles from "./styles";

import GeneralPlayerData from "./GeneralPlayerData";
import StatsPlayerData from "./StatsPlayerData";

export default function PlayerData({ player, selectedTeam, stats }) {
  return (
    <Box sx={styles.boxContainer}>
      <GeneralPlayerData player={player} selectedTeam={selectedTeam} />
      <StatsPlayerData stats={stats} />
    </Box>
  );
}
