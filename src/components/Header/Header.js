import React from "react";
import classes from "./Header.module.css";
import Container from "@mui/material/Container";
import ProductCard from "../productcard/ProductCard";
import SizeList from "../Sizelist/SizeList";
import Productdata from "../productData/Productdata";
import { useProductsContext } from "../../context/productsContext";
// import Checkoutdisplay from "../CheckOutoutput/Checkoutdisplay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Alert } from "@mui/material";

const Header = () => {
  const { products, setProducts } = useProductsContext();
  const handleClick = (id) => {
    let flag = true;
    products.forEach((val) => {
      if (val.id === id) {
        toast.success("Already exist: Go to cart for add more products");
        flag = false;
      }
    });
    if (flag) {
      const data = Productdata.filter((value) => {
        return value.id === id;
      });
      setProducts((prev) => [...prev, ...data]);
    }
  };

  const [filters, setFilters] = React.useState([
    {
      label: "Xs",
      id: 1,
      selected: false,
    },
    {
      label: "S",
      selected: false,
      id: 2,
    },
    {
      label: "M",
      selected: false,
      id: 3,
    },
    {
      label: "Ml",
      selected: false,
      id: 4,
    },
    {
      label: "L",
      selected: false,
      id: 5,
    },
    {
      label: "Xl",
      selected: false,
      id: 6,
    },
    {
      label: "XXL",
      selected: false,
      id: 7,
    },
  ]);
  const [product, setProduct] = React.useState(Productdata);
  const [value, setValue] = React.useState("");
  const changeHandler = (index) => {
    debugger;
    const data = [...filters];
    data[index].selected = !data[index].selected;

    const selectedOptions = data.filter((item) => item.selected);
    const filteredData = Productdata.filter((product) => {
      let isAvailable = false;
      selectedOptions.forEach((item) => {
        if (product.size.includes(item.label)) {
          isAvailable = true;
        }
      });
      if (isAvailable) return product;
    });
    setProduct(filteredData.length > 0 ? filteredData : Productdata);
    setFilters(data);
  };
  React.useEffect(() => {
    if (value === "") {
      setProduct(Productdata);
      return;
    }
    const data = Productdata.filter((val) => {
      return value.length > 1
        ? val.productDesc.toLocaleLowerCase().includes(value)
        : val.productDesc.split(" ")[0].toLowerCase()[0].includes(value);
    });
    setProduct(data);
  }, [value]);

  return (
    <>
      <h1 className={classes.headerHeading1}>Shopping Cart</h1>
      <div className={classes.mobileSizeList}>
        <SizeList
          changeHandler={changeHandler}
          filters={filters}
          setValue={setValue}
        />
      </div>

      <Container maxWidth="1300px" className={classes.headerContainer}>
        <div className={classes.sizeList}>
          <SizeList
            changeHandler={changeHandler}
            filters={filters}
            setFilters={setFilters}
            setValue={setValue}
          />
        </div>
        <div className={classes.allproductData}>
          <h4 className={classes.productListHeading}>
            {product.length} Product(s) Found
          </h4>
          <div className={classes.flexProductCards}>
            {product.map((value, index) => {
              return (
                <ProductCard
                  key={value.id}
                  Image={value.image}
                  handleListen={handleClick}
                  secondaryImage={value.secondaryImage}
                  productDesc={value.productDesc}
                  currncey={value.currncey}
                  price={value.price}
                  text={value.text}
                  sale={value.sale}
                  id={value.id}
                />
              );
            })}
          </div>
        </div>
      </Container>
      {/* <Checkoutdisplay /> */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Header;
