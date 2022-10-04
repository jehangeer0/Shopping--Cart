import * as React from "react";
import classes from "./SizesList.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from "@mui/icons-material/Directions";
// import Productdata from "../productData/Productdata";

const SizeList = ({ filters, setFilters, changeHandler, setValue }) => {
  const [state, setState] = React.useState("");
  return (
    <div className={classes.sizeFixed}>
      <Paper
        className={classes.sizeSearchbar}
        sx={{
          display: "flex",
          alignItems: "center",
          width: 250,
          marginTop: 1,
          marginBottom: 8,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Products"
          inputProps={{ "aria-label": "Search Products" }}
          // value={state}
          onChange={(event) => {
            setValue(event.target.value);
            setState(event.target.value);
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => {
            setValue(state);
          }}
        >
          <SearchIcon color="secondary" />
        </IconButton>
      </Paper>
      <h3>Sizes </h3>
      <div className={classes.allcheckButtons}>
        {filters.map((item, index) => (
          <div
            onClick={() => changeHandler(index)}
            className={`${classes.sizeButton} ${
              filters[index].selected && classes.sizeButton2
            }`}
            key={index}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <p className={classes.sizePara}>
        Leave a star on Github if this repository was useful:
      </p>
      <div className={classes.linkSizes}>
        <a href="https://github.com/jehangeer0">Star</a>
      </div>
    </div>
  );
};

export default SizeList;
