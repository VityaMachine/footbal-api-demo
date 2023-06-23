const styles = {
  mainBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    boxShadow: 24,
    color: "palette.text.primary",
    p: 4,
  },

  contentBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  teamBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textAndLogoBox: {
    width: 450,
    display: "flex",
    flexDirection: "row",
  },
  logoBox: {
    width: 150,
    height: 150,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  textBox: {
    px: "20px",
    width: "260px",
  },
  textLineBox: {
    display: "flex",
    flexDirection: "row",
  },
  textKey: {
    fontWeight: "bold",
  },
  controlsBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 350,
  },
  arenaImgBox: {
    width: 450,
    height: 338,
  },
  arenaImg: {
    width: "100%",
    height: "100%",
  },
};

export default styles;
