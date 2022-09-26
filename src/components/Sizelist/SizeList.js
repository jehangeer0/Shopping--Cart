import * as React from "react";
import classes from "./SizesList.module.css";

const SizeList = ({ filters, setFilters, changeHandler }) => {
  return (
    <>
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
    </>
  );
};

export default SizeList;
