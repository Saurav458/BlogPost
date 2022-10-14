import React, { useEffect } from "react";
 import SearchAppBar from "../Navbar/Navbar";
import './homepage.css'
import ImgMediaCard from "../Card";
import { ActionType } from "../../utils";

import { State } from "../../redux/reducers/rootReducer";
import * as actionCreators from "../../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getData } from "../../redux/actions/action";
function Homepage() {
  const dispatch = useDispatch();
  const { getData } = bindActionCreators(actionCreators, dispatch);

  const product = useSelector((state: State) => state.productData);

  useEffect(() => {
    getData();
  }, []);

  console.log(product);
  return (
    <>
       <SearchAppBar /> 
      <div>
        <img src="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?b=1&k=20&m=922745190&s=170667a&w=0&h=0lBPWualF5SE8Khy1uRoGOcMZry55ZiUUWvPUPIZ3H0=" alt="image"></img>
      </div>
      <div className="cart-item">
        <ImgMediaCard />
      </div>
    </>
  );
}

export default Homepage;
