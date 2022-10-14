import { screen, render, fireEvent } from "@testing-library/react";
import Popupbox from "../Popup";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
const MockaddPost = () => {
  return (
    <Provider store={store}>
 <BrowserRouter>
      <Popupbox />
    </BrowserRouter>
    </Provider>
   
  );
};
describe("Popupbox", () => {
  it("should render heading element", () => {
    render(<MockaddPost />);

    expect(screen.getByTestId("heading")).toBeInTheDocument();
  });
});
