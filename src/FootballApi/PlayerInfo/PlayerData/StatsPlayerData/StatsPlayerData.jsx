import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import styles from "./styles";

export default function StatsPlayerData({ stats }) {
  return (
    <Box sx={styles.boxContainer}>
      <Typography sx={styles.title}>Current season played:&nbsp;</Typography>

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
            {stats.map((el) => (
              <TableRow key={el.league.id + el.team.id}>
                <TableCell>
                  {el.league.name}&nbsp;({el.league.country})
                </TableCell>
                <TableCell>{el.team.name}</TableCell>
                <TableCell align="center">
                  {el.games.appearences}&nbsp;({el.games.lineups})
                </TableCell>
                <TableCell align="center">{el.games.minutes}</TableCell>
                <TableCell align="center">{el.goals.total}</TableCell>
                <TableCell align="center">
                  {el.goals.assists ? el.goals.assists : 0}
                </TableCell>
                <TableCell align="center">
                  {el.games.rating
                    ? Number(el.games.rating).toFixed(2)
                    : "no data"}
                </TableCell>
                <TableCell align="center">{el.cards.yellow}</TableCell>
                <TableCell align="center">{el.cards.red}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
