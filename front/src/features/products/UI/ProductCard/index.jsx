import { getSlug } from "@features/products/utils";
import { Title } from "@features/UI";
import { IconButton } from "@features/UI/Header";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  const { brand, image, id } = product;

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
        {/* Place for footer content here (price and rate is not present on the product object) */}
      </div>
      <IconButton
        src="/public/assets/UI/header/icon-add.svg"
        onClick={(e) => handleAdd(e)}
        variant="secondary"
      />
    </article>
  );
};

export default ProductCard;
