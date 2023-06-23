const styles = {
  modalBox: {
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
  },
  modalPaper: {
    width: "100%",
  },
  title: {
    mt: "15px",
  },
  playerBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    py: "20px",
  },
  loadSpinnerBox: {
    my: "20px",
    display: "flex",
    justifyContent: "center",
  },

  closeBtn: {
    mt: "20px",
  },
};

export default styles;
