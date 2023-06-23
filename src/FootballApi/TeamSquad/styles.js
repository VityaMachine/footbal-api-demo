const styles = {
  modalBox: {
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
  },
  titlePaper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  modalPaper: {
    width: "100%",
    overflow: "hidden",
  },
  tableContainer: {
    maxHeight: 500,
  },
  playerPhoto: {
    width: "100px",
    height: "100px",
  },
  closeBtn: {
    mt: "20px",
  },
  loadSpinner: {
    mt: "20px",
  },
  noPlayersPlaceholder: {
    my: "20px",
  },
};

export default styles;
