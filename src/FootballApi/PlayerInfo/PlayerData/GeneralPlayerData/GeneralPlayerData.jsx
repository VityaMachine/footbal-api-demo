import { Box, Typography } from "@mui/material";

import styles from "./styles";

export default function GeneralPlayerData({ player, selectedTeam }) {
  const birthDate = player
    ? player.birth.date.split("-").reverse().join(".")
    : "";

  return (
    <Box sx={styles.mainBox}>
      {/* LEFT INFO PART */}
      <Box sx={styles.leftRightBox}>
        <Box sx={styles.textBox}>
          <Typography sx={styles.infoName}>Full name:&nbsp;</Typography>
          <Typography>
            {player.firstname}&nbsp;{player.lastname}
          </Typography>
        </Box>

        <Box sx={styles.textBox}>
          <Typography sx={styles.infoName}>
            Player nationality:&nbsp;
          </Typography>
          <Typography>{player.nationality}</Typography>
        </Box>

        <Box sx={styles.textBox}>
          <Typography sx={styles.infoName}>Player club:&nbsp;</Typography>
          <Typography>{selectedTeam.team.name}</Typography>
        </Box>

        <Box sx={styles.textBox}>
          <Typography sx={styles.infoName}>Player position:&nbsp;</Typography>
          <Typography>{player.position}</Typography>
        </Box>

        <Box sx={styles.textBox}>
          <Typography sx={styles.infoName}>Player number:&nbsp;</Typography>
          <Typography>{player.number}</Typography>
        </Box>
      </Box>

      {/* RIGHT INFO PART */}
      <Box sx={styles.leftRightBox}>
        <Box sx={styles.textBox}>
          <Typography sx={styles.infoName}>Birth date:&nbsp;</Typography>
          <Typography>{birthDate}</Typography>
        </Box>

        <Box sx={styles.textBox}>
          <Typography sx={styles.infoName}>Age:&nbsp;</Typography>
          <Typography>{player.age} y.o.</Typography>
        </Box>

        <Box sx={styles.textBox}>
          <Typography sx={styles.infoName}>Birth place:&nbsp;</Typography>
          <Typography>
            {player.birth.country}&nbsp;
            {player.birth.place &&
              "," + player.birth.place.split("-").join(" ")}
          </Typography>
        </Box>

        <Box sx={styles.textBox}>
          <Typography sx={styles.infoName}>Player weight:&nbsp;</Typography>
          <Typography>{player.weight}</Typography>
        </Box>

        <Box sx={styles.textBox}>
          <Typography sx={styles.infoName}>Player height:&nbsp;</Typography>
          <Typography>{player.height}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
