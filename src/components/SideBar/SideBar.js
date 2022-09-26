import Image from "next/image";
import * as React from "react";
import classes from "./SideBar.module.css";
import CloseIcon from "@mui/icons-material/Close";
import SideBarCards from "../Sidebarcards/SideBarCards";
import { useProductsContext } from "../../context/productsContext";
import { Fade, Grow } from "@mui/material";

const SideBar = ({ showHandler }) => {
  const [total, setTotal] = React.useState(0);
  const { products, setProducts } = useProductsContext();

  const handleClose = (id) => {
    const data = products.filter((val) => {
      if (val.id === id) {
        val.itemQty = 0;
      }
      return val.id !== id;
    });
    setProducts(data);
  };

  const handleAdd = (id) => {
    const data = products.map((val) => {
      if (val.id === id) {
        val.itemQty++;
        return val;
      }
      return val;
    });
    setProducts(data);
  };
  const handleRemove = (id) => {
    const data = products.map((val) => {
      if (val.id === id) {
        if (val.itemQty > 1) {
          val.itemQty--;
        }
        return val;
      }
      return val;
    });
    setProducts(data);
  };
  React.useEffect(() => {
    let price = 0;
    products.forEach((val) => {
      price += val.price * val.itemQty;
    });
    setTotal(price.toFixed(2));
  }, [products]);
  const handelCheckout = () => {
    alert(`Checkout - Subtotal: $ ${total}`);
  };
  return (
    <Grow in={open} {...(open ? { timeout: 1000 } : {})}>
      <div className={classes.sidebar}>
        <div onClick={showHandler} className={classes.closeButton}>
          <CloseIcon fontSize="large" className={classes.closeIcon} />
        </div>

        <div className={classes.sideBarItems}>
          <div className={classes.sidebarIcon}>
            <Image src="/images/cart-icon.png" width="40px" height="40px" />
          </div>
          <div className={classes.cartIcon}>
            {!products ? "0" : products.length}
          </div>

          <h2>Cart</h2>
        </div>
        <div className={classes.cartListItems}>
          {products?.map((val) => {
            return (
              <SideBarCards
                key={val.id}
                id={val.id}
                smallimage={val?.smallimage}
                productDesc={val.productDesc}
                itemSize={val.itemSize}
                itemQty={val.itemQty}
                price={val.price}
                onClose={handleClose}
                onAdd={handleAdd}
                onRemove={handleRemove}
              />
            );
          })}
        </div>
        <div className={classes.cartCheckBox}>
          <div className={classes.subtotalPrice}>
            <span>SUBTOTAL:</span>
            <span style={{ color: "orange" }}>${total}</span>
          </div>
          <button className={classes.subtotalButton} onClick={handelCheckout}>
            CheckOut
          </button>
        </div>
      </div>
    </Grow>
  );
};

export default SideBar;
