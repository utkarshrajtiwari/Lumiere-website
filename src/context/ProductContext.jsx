import React, { createContext, useState } from "react";

export const productContext = createContext(null);

const ProductContext = (props) => {
  const [data, setdata] = useState([]);
  return (
    <productContext.Provider value={{ data, setdata }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContext;
