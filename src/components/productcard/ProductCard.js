import * as React from "react";
import classes from "./ProductCard.module.css";
import Image from "next/image";
import { useProductsContext } from "../../context/productsContext";

const ProductCard = ({
  Image,
  secondaryImage,
  productDesc,
  currncey,
  price,
  text,
  sale,
  handleListen,
  id,
}) => {
  const [enter, setEnter] = React.useState(false);
  const { products, setProducts } = useProductsContext();
  const [color, setColor] = React.useState(false);
  const handleEnter = () => {
    setEnter(true);
  };
  const handleLeave = () => {
    setEnter(false);
  };
  React.useEffect(() => {
    const data = products.filter((val) => {
      return val.id === id;
    });
    if (data.length >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [products]);
  return (
    <>
      <div
        className={classes.productCard}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div>
          <img
            src={enter ? secondaryImage : Image}
            className={classes.cardImage}
          />
        </div>
        <p>{productDesc}</p>
        <div className={classes.yellowBorder}></div>

        <div className={classes.productPrice}>
          <p>{currncey}</p>
          <h2>{price}</h2>
        </div>
        <div className={classes.productRate}>
          <p>{text}</p>
          <h3>{sale}</h3>
        </div>
        <button
          className={enter ? classes.cartbtn : classes.cartButton}
          onClick={() => {
            handleListen(id);
          }}
          style={{ backgroundColor: color && "red" }}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductCard;
