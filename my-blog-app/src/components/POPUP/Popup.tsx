import React from "react";
import './popup.scss';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from '../../redux/actions/action'
import {State} from '../../redux/reducers/rootReducer';
import { Link } from "react-router-dom";


function Popupbox(){
    const dispatch =useDispatch();
    const {popUp}=bindActionCreators(actionCreators,dispatch);
    const data =useSelector((state:State)=>state.popup)
      const removePopup =():void=>{
        popUp(false);
    }
    return(
        <>
      
            <div className="login-flex">
                <div className="responsecontent">
                    <h3 id="loginheading"  data-testid="heading">Data Added successfully</h3>
                    <Link to='/'><button  id="removebtn" onClick={removePopup}>Okay</button></Link>
                </div>
            </div>
        </>
    )
}
export default Popupbox;