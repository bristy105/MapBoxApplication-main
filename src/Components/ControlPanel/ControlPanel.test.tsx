import { render, screen, fireEvent } from "@testing-library/react";
import ControlPanel from "./ControlPanel";

const props = {
  setFahrenheit: jest.fn(),
  isFahrenheit: false,
};

describe("<ControlPanel />", () => {
  it("should render component correctly", () => {
    render(<ControlPanel {...props} />);
    const headerText = screen.getByText("Toggle City Temperature Unit");
    expect(headerText).toBeInTheDocument();
  });
  it("should call setFahrenheit prop when switch control clicked", () => {
    render(<ControlPanel {...props} />);
    fireEvent.click(screen.getByTestId("switch-control"));
    expect(props.setFahrenheit).toHaveBeenCalledTimes(1);
  });
});
