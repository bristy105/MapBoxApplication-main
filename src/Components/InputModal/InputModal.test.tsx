import { render, screen, fireEvent } from "@testing-library/react";
import InputModal from "./InputModal";

const props = {
  setFileData: jest.fn(),
  setOpen: jest.fn(),
  selectedFile: "test",
  setSelectedFile: jest.fn(),
};

describe("<InputModal />", () => {
  it("should render component correctly", () => {
    render(<InputModal open={true} {...props} />);
    const title = screen.getByText("Upload file from your local device");
    expect(title).toBeInTheDocument();
  });

  it("should not render dialog when open is false", () => {
    render(<InputModal open={false} {...props} />);
    const title = screen.queryByText("Upload file from your local device");
    expect(title).toBeNull();
  });

  it("should render with confirm and cancel button", () => {
    render(<InputModal open={true} {...props} />);
    const confirm = screen.queryByText("Confirm");
    const cancel = screen.queryByText("Cancel");
    expect(confirm).toBeInTheDocument();
    expect(cancel).toBeInTheDocument();
  });

  it("should call setOpen prop when cancel button clicked", () => {
    render(<InputModal open={true} {...props} />);
    fireEvent.click(screen.getByTestId("cancel-button"));
    expect(props.setOpen).toHaveBeenCalledTimes(1);
  });
  it("should call setSelectedFile prop when cancel button clicked", () => {
    render(<InputModal open={true} {...props} />);
    fireEvent.change(screen.getByTestId("file-input"));
    expect(props.setSelectedFile).toHaveBeenCalledTimes(1);
  });
});
