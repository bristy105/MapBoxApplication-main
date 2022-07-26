import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

interface Props {
  isFahrenheit: boolean; // boolean value to check if unit is fahrenheit
  setFahrenheit: (value: boolean) => void; // state function  to update boolean value
}

const useStyles = makeStyles(() => ({
  controlPanel: {
    position: "absolute",
    top: "78px",
    right: '5px',
    maxWidth: "320px",
    background: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
    padding: "12px 24px",
    margin: "20px",
    fontSize: "15px",
    lineHeight: 2,
    color: "#6b6b76",
    textTransform: "uppercase",
    outline: "none",
  },
}));

const ControlPanel: React.FC<Props> = ({
  isFahrenheit,
  setFahrenheit,
}): React.ReactElement => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFahrenheit(event.target.checked);
  };

  return (
    <div className={classes.controlPanel}>
      <h3>Toggle City Temperature Unit</h3>
      <div>
        <FormControlLabel
          control={
            <Switch
              data-testid="switch-control"
              checked={isFahrenheit}
              onChange={handleChange}
            />
          }
          label="Convert to Fahrenheit"
        />
      </div>
    </div>
  );
};

export default ControlPanel;
