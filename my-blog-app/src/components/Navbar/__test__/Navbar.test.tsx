import { screen, render, fireEvent } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import SearchAppBar from "../Navbar";
const MockaddPost = () => {
  return (
    <Provider store={store}>
        <SearchAppBar/>
    </Provider>
   
  );
};
describe("SearchAppBar", () => {
  it("should render button element", () => {
    render(<MockaddPost />);

    expect(screen.getByText("Create Blog")).toBeInTheDocument();
  });
  it("should render menuItem1", () => {
    render(<MockaddPost />);

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("should render menuItem2", () => {
    render(<MockaddPost />);

    expect(screen.getByText("My account")).toBeInTheDocument();
  });
});
