import _ from "lodash";
import { GeoInfo } from "../Types/types";

export const featureformatter = (
  fileData: Array<GeoInfo>,
  isFahrenheit: boolean
): any => {
  // converts units from °C t0 °F
  const unitConverter = (celsius: string): number => {
    let fahrenheit = (parseInt(celsius) * 9) / 5 + 32;
    return fahrenheit;
  };

  let formatedData = [{}];
  // formats feature for each data element
  if (_.size(fileData) > 1) {
    _.forEach(fileData, function (data: GeoInfo) {
      let markerTitle = isFahrenheit
        ? `${data.city} ${unitConverter(data.temp)} °F`
        : `${data.city} ${data.temp} °C`;
      let featureFormat = {
        type: "Feature",
        properties: { title: markerTitle, id: data.city },
        geometry: { type: "Point", coordinates: [data.lon, data.lat] },
      };

      formatedData.push(featureFormat);
    });
    return formatedData;
  }

  return {};
};
