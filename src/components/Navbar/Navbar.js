import * as React from "react";
import classes from "./Navbar.module.css";
import Container from "@mui/material/Container";
import Image from "next/image";
import SideBar from "../sideBar/SideBar";
import { useProductsContext } from "../../context/productsContext";

const Navbar = ({ showHandler, showsideBar }) => {
  const { products, setProducts } = useProductsContext();
  return (
    <div className={classes.Navbar}>
      <Container>
        <div className={classes.container}>
          <div onClick={showHandler}>
            <Image src="/images/cart-icon.png" width="50px" height="50px" />
          </div>
          <div className={classes.cartIcon}>
            {!products ? "0" : products.length}
          </div>
        </div>
      </Container>
      <div>{showsideBar && <SideBar showHandler={showHandler} />}</div>
    </div>
  );
};

export default Navbar;
