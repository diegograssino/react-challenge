import { getPrice, getSlug } from "@features/products/utils";
import { Body, Title } from "@features/UI";
import { IconButton } from "@features/UI/Header";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  const { brand, image, id } = product;
  const referencePrice = product.skus[0].price;

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
          {getPrice(referencePrice)}
        </Body>
      </div>
      <IconButton src="/assets/UI/icons/icon-go.svg" variant="secondary" />
    </article>
  );
};

export default ProductCard;
