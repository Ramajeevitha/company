import React, { useEffect } from "react";
import SEO from "../../components/SEO/SEO";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import "./ProductsPage.css";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      name: "E-Commerce",
      description: "Our fully featured E-Commerce platform handling electronics and retail at nerovoltelectronics.com.",
      category: "Software",
      link: "https://nerovoltelectronics.com"
    }
  ];

  return (
    <div className="products-page">
      <SEO 
        title="Products" 
        description="Explore our E-Commerce product handling electronics and retail."
      />
      <div style={{ marginBottom: "40px" }} data-aos="fade-right">
        <PageNavigation to="/" text="Back" />
      </div>
      <div className="page-header" data-aos="fade-down">
        <h1>Our Products</h1>
        <p>Discover our in-house developed solutions driving digital transformation.</p>
      </div>

      <div className="single-product-container" data-aos="fade-up" data-aos-delay="200">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <span className="product-badge">{product.category}</span>
            <div className="product-card-content">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {product.link ? (
                <button 
                  className="view-btn"
                  onClick={() => window.open(product.link, "_blank", "noopener,noreferrer")}
                >
                  Visit Platform
                </button>
              ) : (
                <button className="view-btn">Learn More</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
