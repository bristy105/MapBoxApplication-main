import React, { useState } from "react";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { GeoInfo } from "../../Types/types";

interface Props {
  setFileData: (value: Array<GeoInfo>) => void; // state function  to update boolean value
  open: boolean; // boolean value to check if modal is open or closed
  setOpen: (value: boolean) => void; // state function  to open/close modal
  selectedFile: string; // selcted file
  setSelectedFile: (value: string) => void; // state fucntion to set the upload file
}

const InputModal: React.FC<Props> = ({
  setFileData,
  open,
  setOpen,
  selectedFile,
  setSelectedFile,
}): React.ReactElement => {
  const [disabled, isDisabled] = useState(true);

  const onChangeHandler = (event: React.ChangeEvent<any>): void => {
    setSelectedFile(event.target.files[0]);
    isDisabled(false);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const onClickHandler = (): void => {
    const data = new FormData();
    data.append("file", selectedFile);
    axios
      .post("http://localhost:8000/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        setFileData(res.data);
        setOpen(false);
        isDisabled(true);
      });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">
        {"Upload file from your local device"}
      </DialogTitle>
      <DialogContent>
        <input
          data-testid="file-input"
          type="file"
          onChange={onChangeHandler}
          accept=".json"
        />
      </DialogContent>
      <DialogActions>
        <Button
          data-testid="confirm-button"
          disabled={disabled}
          onClick={onClickHandler}
          variant="contained"
          color="primary"
        >
          Confirm
        </Button>
        <Button
          data-testid="cancel-button"
          onClick={handleClose}
          color="primary"
          variant="outlined"
          autoFocus
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InputModal;
