import React, { useEffect } from "react";
import { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import "./Homepage/homepage.css";
import { red } from "@material-ui/core/colors";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreator from "../../redux/actions/action";
import { BlogData } from "../../utils/TypeScript";
import { State } from "../../redux/reducers/rootReducer";
import Popupbox from "../POPUP/Popup";
import { getData } from "../../redux/actions/action";
// import {storage} from "./firebase";

function Addpost() {
  const paperStyle = {
    padding: 20,
    height: "78vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "18px 0" };
  const [inputValue, setInputValue] = useState<BlogData>({
    title: "",
    description: "",
    images: [],
  });
  const [type, setType] = React.useState("");
  const dispatch = useDispatch();
  const blogData = useSelector((state: State) => state.popup);
  console.log(blogData);
  const { popUp, getData } = bindActionCreators(actionCreator, dispatch);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.name != "images") console.log(event.target.name);
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });

    if (event.target.name == "images") {
      const target = event.target as HTMLInputElement;
      const imageFile = Array.from(target.files as FileList);
      const imageArray: Array<string> = [];
      imageFile.map((img) => {
        imageArray.push(img.name);
      });
      setInputValue({ ...inputValue, images: imageArray });
    }
  };
  const handleSubmit = () => {
    fetch("http://localhost:9004/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    popUp(true);
  };

  return (
    <div className="background">
      <a href="/">
        <ArrowBackIcon className="icon" />
      </a>
      <div className="form">
        <div>
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid alignItems="center">
                <Avatar
                  className="avatar"
                  style={{ background: "blue", color: "white" }}
                >
                  <AddBoxIcon />
                </Avatar>
                <h2>Add Blog</h2>
              </Grid>
              <TextField
                label="Title"
                placeholder="Enter Title"
                onChange={handleChange}
                fullWidth
                required
                name="title"
              />

              <div>
                <TextareaAutosize
                  style={{
                    height: 94,
                    width: 240,
                    marginTop: 21,
                    padding: 20,
                  }}
                  onChange={handleChange}
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Minimum 3 rows"
                  name="description"
                />
              </div>

              <input
                style={{ marginTop: 20, marginLeft: -25 }}
                type="file"
                multiple
                name="images"
                onChange={handleChange}
                placeholder="Enter Description"
                required
                value=''
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Paper>
          </Grid>
        </div>
      </div>
      {/* {blogData && <Popupbox />} */}
    </div>
  );
}

export default Addpost;
