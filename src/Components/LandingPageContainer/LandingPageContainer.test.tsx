import { render, screen } from "@testing-library/react";
import LandingPageContainer from "./LandingPageContainer";
const props = {
  fileData: [
    {
      city: "Helsinki",
      lat: "60.1676",
      lon: "24.9421",
      temp: "7.0",
    },
    {
      city: "Berlin",
      lat: "52.520008",
      lon: "13.404954",
      temp: "8.0",
    },
    {
      city: "Moscow",
      lat: "55.751244",
      lon: "37.618423",
      temp: "10.0",
    },
  ],
  setFileData: jest.fn(),
};

jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
  LandingPageContainer: () => ({}),
}));

describe("<LandingPageContainer />", () => {
  it("should render compoment correctly", () => {
    render(<LandingPageContainer {...props} />);
    const uploadButton = screen.getByText("Upload Json File");
    expect(uploadButton).toBeInTheDocument();
  });
  it("should render map container with correct style", () => {
    const { getByTestId } = render(<LandingPageContainer {...props} />);
    expect(getByTestId("map-container")).toHaveStyle("width: 100%");
  });
  it("should render control panel when fileData length > 1", () => {
    render(<LandingPageContainer {...props} />);
    const uploadButton = screen.getByText("Toggle City Temperature Unit");
    expect(uploadButton).toBeInTheDocument();
  });
  it("should not render control panel when fileData length < 1", () => {
    const initProp = {
      setFileData: jest.fn(),
      fileData: [
        {
          city: "",
          lat: "",
          lon: "",
          temp: "",
        },
      ],
    };
    render(<LandingPageContainer {...initProp} />);
    const uploadButton = screen.queryByText("Toggle City Temperature Unit");
    expect(uploadButton).not.toBeInTheDocument();
  });
});
