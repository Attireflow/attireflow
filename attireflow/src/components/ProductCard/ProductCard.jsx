import Button from "components/Button/Button";
import classes from "./product-card.module.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";

function ProductCard({ product }) {
  const { title, price } = product;
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <span
          className={classes.icon}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <MdFavorite size="1.5rem" />
          ) : (
            <MdFavoriteBorder size="1.5rem" />
          )}
        </span>
      </div>
      <div>
        <p>{title}</p>
        <p>
          <span>N</span>
          {price}
        </p>
        <Rating
          initialRating={4}
          emptySymbol={<FaRegStar size="1.5rem" />}
          fullSymbol={<FaStar size="1.5rem" />}
        />
        <Button variant="outline">Add to cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;
