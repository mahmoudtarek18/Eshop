import React, { useEffect } from "react";
import Product from "../../components/product/Product";

const Home = () => {
  const url = window.location.href;

  const scrollToProducts = () => {
    if (url.includes("#products")) {
      window.scrollTo({
        top: 700,
        behavior: "smooth",
      });
      return;
    }
  };

  useEffect(() => {
    scrollToProducts();
  }, []);

  return (
    <div>
      <Product />
    </div>
  );
};

export default Home;
