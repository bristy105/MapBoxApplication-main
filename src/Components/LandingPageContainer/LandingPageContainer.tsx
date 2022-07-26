import React, { useState, useEffect } from "react";
import _ from "lodash";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import InputModal from "../InputModal/InputModal";
import ActionHeader from "../ActionHeader/ActionHeader";
import { featureformatter } from "../../Utils/formatter";
import { markerCircle, layerStyle } from "./layers";
import ControlPanel from "../ControlPanel/ControlPanel";
import { makeStyles } from "@material-ui/core/styles";
import { GeoInfo } from "../../Types/types";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

interface Props {
  setFileData: (value: Array<GeoInfo>) => void; // state function  to update file data
  fileData: Array<GeoInfo>; //prop to send uploaded file data
}

const useStyles = makeStyles(() => ({
  mapContainer: {
    height: "100%",
    width: "100%",
  },
}));

const LandingPageContainer: React.FC<Props> = ({
  fileData,
  setFileData,
}): React.ReactElement => {
  const [open, setOpen] = React.useState(false);
  const [isFahrenheit, setFahrenheit] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [viewport, setViewport] = useState({
    latitude: 80.1676,
    longitude: 34.9421,
    zoom: 1.5,
    bearing: 0,
    pitch: 0,
  });

  const classes = useStyles();
  let formattedData = featureformatter(fileData, isFahrenheit);
  let geojson = {
    type: "FeatureCollection",
    features: formattedData,
  };

  useEffect(() => {
    if (_.size(fileData) > 1) {
      setViewport({
        ...viewport,
        latitude: parseFloat(formattedData[1]?.geometry.coordinates[0]),
        longitude: parseFloat(formattedData[1]?.geometry.coordinates[1]),
        zoom: 2.5,
        // @ts-ignore */
        transitionDuration: 500,
      });
    }
  }, [fileData]);

  return (
    <>
      <ActionHeader setOpen={setOpen}></ActionHeader>
      <InputModal
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        setOpen={setOpen}
        open={open}
        setFileData={setFileData}
      ></InputModal>
      <div className={classes.mapContainer} data-testid="map-container">
        <ReactMapGL
          {...viewport}
          data-testid="custom-element"
          className="bal"
          width="100vw"
          height="100vh"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={setViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          {/*// @ts-ignore */}
          <Source id="my-data" type="geojson" data={geojson}>
            {/*// @ts-ignore */}
            <Layer {...layerStyle} />
            {/*// @ts-ignore */}
            <Layer {...markerCircle} />
          </Source>
        </ReactMapGL>
      </div>
      {_.size(fileData) > 1 && (
        <ControlPanel
          isFahrenheit={isFahrenheit}
          setFahrenheit={setFahrenheit}
        ></ControlPanel>
      )}
    </>
  );
};

export default LandingPageContainer;
