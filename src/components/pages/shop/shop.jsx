import React, { useContext } from "react";
import Layout from "../../shared/layout";
import FeaturedProduct from "../../shared/featured-product";
import { ProductsContext } from "../../../context/products-context";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct {...product} key={product.id} />
  ));

  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop Now</h2>
        <div className="shop-now">
          <p >Your child can pick between the three starter Dragons and evolve them accordingly. Once you purchase a specific dragon, create an account to keep track of the Dragon’s power level, edit and complete checklist tasks, and also you can view the ranking of the strongest Dragons in each state. </p>
          <h3>Get Started Today!</h3>
        </div>
        <div className="product-list">
          {
            allProducts
          }
        </div>
      </div>
    </Layout>
  )
}

export default Shop;