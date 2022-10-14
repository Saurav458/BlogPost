 import { screen, render, fireEvent } from "@testing-library/react";
import Addpost from "../Addpost";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from '../../../redux/store';
const MockaddPost = () => {
  return (
    <Provider store={store}>
      <Addpost />
    </Provider>
  );
};
describe("Addpost", () => {
  
  it("should render onchange element1", () => {
    render(<MockaddPost />);
    const inputElement = screen.getByPlaceholderText(/Enter Title/i);
    fireEvent.change(inputElement,{target:{value:"Education Blog"}})
    expect(inputElement).toBeInTheDocument();
  });
  it("should render onchange element2", () => {
    render(<MockaddPost />);
    const inputElement = screen.getByPlaceholderText(/Minimum 3 rows/i);
    fireEvent.change(inputElement,{target:{value:"this is e educational blog"}})
    expect(inputElement).toBeInTheDocument();
  });
  it("should render onchange element3", () => {
    render(<MockaddPost />);
    const inputElement = screen.getByPlaceholderText(/Enter Description/i);
    expect(inputElement).toBeInTheDocument();
  });
  it("should render button element",()=>{
    render(<MockaddPost/>)
    const buttonElement=screen.queryByText(/Submit/i)
    expect(buttonElement).toBeInTheDocument()
  })
});

describe("mockAddpost",()=>{
  it("should render heading element", () => {
    render(<MockaddPost />);
    const inputElement = screen.getByRole("heading");
    expect(inputElement).toBeInTheDocument();
  });
  it("should render button eleamt",()=>{
    render(<MockaddPost/>)
    const buttonElement=screen.queryByText(/Submit/i)
    expect(buttonElement).toBeInTheDocument()
  })
})
