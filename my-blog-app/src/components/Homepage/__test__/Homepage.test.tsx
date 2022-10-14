import { screen, render, fireEvent } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Homepage from "../Homepage";
const MockaddPost = () => {
  return (
    <Provider store={store}>
        <Homepage/>
    </Provider>
   
  );
};
describe("Homepage", () => {
  it("should render heading element", () => {
    render(<MockaddPost />);

    expect(screen.getByAltText("image")).toBeInTheDocument();
  });
});
