export const layerStyle = {
  id: "point",
  type: "symbol",
  layout: {
    "icon-image": "custom-marker",
    "text-field": ["get", "title"],
    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    "text-offset": [0, 1.25],
    "text-anchor": "top",
  },
};

export const markerCircle = {
  type: "circle",
  paint: {
    "circle-color": "#dc143c",
    "circle-radius": 11,
    "circle-stroke-width": 1,
    "circle-stroke-color": "#fff",
  },
};
