import React from "react";
import Image from "next/image";
import classes from "../Sidebarcards/SideBarcards.module.css";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
const SideBarCards = ({
  smallimage,
  productDesc,
  itemSize,
  itemQty,
  price,
  onClose,
  id,
  onAdd,
  onRemove,
}) => {
  return (
    <div>
      <div className={classes.sideBarcard}>
        <div className={classes.itemsFlex}>
          <div className={classes.sidebarsmalImage}>
            <Image src={smallimage} width="95px" height="124px" />
          </div>
          <div className={classes.sidebaritemName}>
            <h4>{productDesc}</h4>
            <p>{itemSize}</p>
            <p>quantity:{itemQty}</p>
          </div>
          <div className={classes.sidebaritemPrice}>
            <CloseIcon
              fontSize="smal"
              className={classes.closeIconSideBar}
              onClick={() => {
                onClose(id);
              }}
            />
            <p>{price}</p>
            <div>
              <IconButton aria-label="ControlPointIcon" sx={{ color: "white" }}>
                <ControlPointIcon
                  onClick={() => {
                    onAdd(id);
                  }}
                />
              </IconButton>
              <IconButton
                aria-label="RemoveCircleOutlineIcon"
                sx={{ color: "white" }}
              >
                <RemoveCircleOutlineIcon
                  onClick={() => {
                    onRemove(id);
                  }}
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarCards;
