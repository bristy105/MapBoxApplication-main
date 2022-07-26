import { render, screen, fireEvent } from "@testing-library/react";
import ActionHeader from "./ActionHeader";

const props = {
  setOpen: jest.fn(),
};

describe("<ActionHeader />", () => {
  it("should render component correctly", () => {
    render(<ActionHeader {...props} />);
    const uploadButton = screen.getByText("Upload Json File");
    expect(uploadButton).toBeInTheDocument();
  });
  it("should call setOpen prop when upload button clicked", () => {
    render(<ActionHeader {...props} />);
    fireEvent.click(screen.getByTestId("upload-button"));
    expect(props.setOpen).toHaveBeenCalledTimes(1);
  });
});
