import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

interface Props {
  setOpen: (value: boolean) => void; // state function to open/close modal
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#258ab5",
    display: "flex",
    justifyContent: "space-between",
    height: "60px",
  },
  button: {
    marginLeft: "40px",
  },
}));

const ActionHeader: React.FC<Props> = ({ setOpen }): React.ReactElement => {
  const classes = useStyles();

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.appBar}>
          <Button
            data-testid="upload-button"
            variant="contained"
            color="secondary"
            onClick={handleClickOpen}
            className={classes.button}
          >
            Upload Json File
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ActionHeader;
