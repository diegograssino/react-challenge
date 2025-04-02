import { getProduct, getStockPrice } from "@features/products/services"; // Assuming this is the correct path
import { getIdFromSlug, getPrice } from "@features/products/utils";
import { Body, Loader, Title } from "@features/UI";
import Button from "@features/UI/Button";
import { IconButton } from "@features/UI/Header";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { slug } = useParams();
  const id = getIdFromSlug(slug);

  const { data: product, isError: isProductError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct({ id }),
    enabled: !!id,
  });

  const [skuPos, setSkuPos] = useState(0);
  const {
    data: stockPrice,
    isLoading,
    isError: isStockPriceError,
  } = useQuery({
    queryKey: ["stockPrice", product?.skus[skuPos].code],
    queryFn: () => getStockPrice({ sku: product?.skus[skuPos].code }),
    enabled: !!product,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  const handleSkuChange = (pos) => {
    setSkuPos(pos);
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

  if (isProductError || isStockPriceError) {
    return (
      <Title variant="primary" as="h1">
        Not Found
      </Title>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="product-detail">
      <article className="product-detail__container">
        <img className="product-detail__image" src={product?.image} />
        <div className="product-detail__header">
          <div>
            <Title variant="primary" as="h1">
              {product?.brand}
            </Title>
            <Body as="p" variant="tertiary">
              {getPrice(stockPrice?.price)}
            </Body>
          </div>
          <Body as="p" variant="senary">
            {`Origin: ${product?.origin} | Stock: ${stockPrice?.stock}`}
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
            {product?.information}
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
              {product?.skus.map((size, i) => (
                <button
                  key={i}
                  className={i === skuPos ? "selected" : ""}
                  onClick={() => handleSkuChange(i)}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>
          <div className="product-detail__footer-ctas">
            <IconButton
              variant="tertiary"
              src="/public/assets/UI/icons/icon-bag.svg"
              onClick={handleAddToBag}
            />
            <Button onClick={handleAddToCart}>Add to cart</Button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ProductDetail;
