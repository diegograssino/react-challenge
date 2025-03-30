import { getSlug } from "@features/products/utils";
import { Body, Title } from "@features/UI";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  const { brand, skus, image, id } = product;

  const price = skus[0].price
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(skus[0].price / 100)
    : null;

  const handleAdd = (e) => {
    e.stopPropagation();
    e.cancelBubble = true;
    alert("Product added to cart!");
  };

  const handleClick = () => {
    navigate(getSlug(id, brand));
  };

  return (
    <article className="product-card__container" onClick={handleClick}>
      <div className="product-card__header">
        <Title as="h3" variant="quinary" centered>
          {brand}
        </Title>
      </div>
      <img className="product-card__image" src={image} alt={brand} />
      <div className="product-card__footer">
        <Body as="p" variant="quaternary">
          {price}
        </Body>
      </div>
      <button
        className="product-card__add-button"
        onClick={(e) => handleAdd(e)}
      >
        <div className="icon-button__image-container">
          <img src="/public/assets/UI/header/icon-add.svg" />
        </div>
      </button>
    </article>
  );
};

export default ProductCard;
