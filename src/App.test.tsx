import { render } from "@testing-library/react";
import App from "./App";

describe("<ActionHeader />", () => {
  it("should render component correctly", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("app")).toHaveStyle("textAlign: center");
  });
});
