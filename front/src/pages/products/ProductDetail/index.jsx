import { useApiPolling } from "@features/products/hooks";
import { getIdFromSlug, getPrice } from "@features/products/utils";
import { Body, Loader, Title } from "@features/UI";
import { useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);
  const { product, stockPrice, loading, sku, setSku } = useApiPolling({ id });
  const handleSkuChange = (pos) => {
    setSku(pos);
  };

  const [collapseInfo, setCollapseInfo] = useState(true);

  const handleCollapse = () => {
    setCollapseInfo(!collapseInfo);
  };

  const handleAddToCart = () => {
    alert("Added to cart!");
  };

  const handleAddToBag = () => {
    alert("Added to bag!");
  };

  return (
    <main className="product-detail">
      {!loading ? (
        <article className="product-detail__container">
          <img className="product-detail__image" src={product.image} />
          <div className="product-detail__header">
            <div>
              <Title variant="primary" as="h1">
                {product.brand}
              </Title>
              <Body as="p" variant="tertiary">
                {getPrice(stockPrice.price)}
              </Body>
            </div>
            <Body as="p" variant="senary">
              {`Origin: ${product.origin} | Stock: ${stockPrice.stock}`}
            </Body>
          </div>
          <div className="product-detail__body">
            <Title as="h2" variant="tertiary">
              Description
            </Title>
            <Body
              as="p"
              variant="primary"
              className={collapseInfo ? "collapsed" : ""}
            >
              {product.information}
            </Body>
            <button
              onClick={handleCollapse}
              className={collapseInfo ? "collapsed" : ""}
            >
              {collapseInfo ? (
                <>
                  <Body variant="primary" as="span">
                    ...
                  </Body>{" "}
                  <Body variant="septenary" as="span">
                    Read More
                  </Body>
                </>
              ) : (
                <>
                  <Body variant="septenary" as="span">
                    Show Less
                  </Body>
                </>
              )}
            </button>
          </div>
          <div className="product-detail__footer">
            <Title as="h2" variant="tertiary">
              Size
            </Title>
            <div className="product-detail__footer-carousel">
              <div>
                {product.skus.map((size, i) => (
                  <button
                    key={i}
                    className={i === sku ? "selected" : ""}
                    onClick={() => handleSkuChange(i)}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="product-detail__footer-ctas">
              <button
                className="product-detail__footer-ctas-bag"
                onClick={handleAddToBag}
              >
                <img src="/public/assets/UI/icons/icon-bag.svg" />
              </button>
              <button
                className="product-detail__footer-ctas-buy"
                onClick={handleAddToCart}
              >
                <Body variant="nonary" as="p">
                  Add to cart
                </Body>
              </button>
            </div>
          </div>
        </article>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default ProductDetail;
