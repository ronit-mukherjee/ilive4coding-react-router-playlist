import React from "react";

import { useQuery } from "../../hooks";

const Products = () => {
  const query = useQuery();
  const categoryName = query.get("category") || "";

  return <h1 style={{ textTransform: "capitalize" }}>{categoryName}</h1>;
};

export default Products;
