import React, { useState } from "react";
import LandingPageContainer from "./Components/LandingPageContainer/LandingPageContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  App: {
    textAlign: "center",
    width: "fit-content",
  },
}));

const INITIAL_FILE_DATA = {
  city: "",
  lat: "",
  lon: "",
  temp: "",
};

const App = (): React.ReactElement => {
  const classes = useStyles();
  const [fileData, setFileData] = useState([INITIAL_FILE_DATA]);

  return (
    <div data-testid="app" className={classes.App}>
      <LandingPageContainer
        fileData={fileData}
        setFileData={setFileData}
      ></LandingPageContainer>
    </div>
  );
};

export default App;
