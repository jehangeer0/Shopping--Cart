import * as React from "react";

const ProductsContext = React.createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = React.useState([]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  const context = React.useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("productContext can only be used inside ProductProvider");
  }
  return context;
}
