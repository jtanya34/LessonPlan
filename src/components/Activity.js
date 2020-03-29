import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Activity(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [button, setButton] = React.useState("");

  const handleOpen = (name) => {
    setOpen(true);
    setButton(name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="modals">
        <button onClick={() => handleOpen("Video Activity")}>
          View Activity
        </button>
        <button onClick={() => handleOpen("Classflow")}>View ClassFlow</button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{button}</h2>
            {button === "Classflow" ? (
              <p id="simple-modal-description">{props.classFlow}</p>
            ) : (
              <p id="simple-modal-description">{props.videoActivity}</p>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
}
