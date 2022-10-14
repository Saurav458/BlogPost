import { Action, BlogData } from "../../utils/TypeScript";
import { ActionType } from "../../utils";
import { ActionCreator, Dispatch } from "redux";

import * as React from "react";
import axios from "axios";

export const popUp = (data: Boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.POPUP,
      payload: data,
    });
  };
};
// export const getData =()=>{
//   console.log("blog info")
//   const data=1
//   fetch('http://localhost:9004/posts')
// .then(data => {
// return data.json();
// })
// .then(post => {

// console.log(post);
// });
//   return(dispatch:Dispatch<Action>)=>{

//       dispatch({
//           type:ActionType.getDATA,
//           payload:data

//       })
//   }
// }

export const getData = () => {
  return (dispatch: Dispatch) => {
    return axios.get("http://localhost:9004/posts").then((res) => {
      dispatch(changeColor(res.data));
    });
  };
};

export function changeColor(data: any) {
  return {
    type: "getdata",
    payload: data,
  };
}




