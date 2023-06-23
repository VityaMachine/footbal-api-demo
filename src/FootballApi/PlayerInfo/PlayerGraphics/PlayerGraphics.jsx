import { Box } from "@mui/material";

import styles from "./styles";

export default function PlayerGraphics({ player, selectedTeam }) {
  return (
    <Box sx={styles.imagesBox}>
      <Box sx={styles.photoAndLogoBox}>
        <img src={player.photo} alt="player_photo" style={styles.image} />
      </Box>

      <Box sx={{ width: "150px", height: "112px", my: "10px" }}>
        <img src={player.countryFlag} alt="player_photo" style={styles.image} />
      </Box>

      <Box sx={styles.photoAndLogoBox}>
        <img
          src={selectedTeam.team.logo}
          alt="player_photo"
          style={styles.image}
        />
      </Box>
    </Box>
  );
}
