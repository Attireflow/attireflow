import ProductCard from "components/ProductCard/ProductCard";
import classes from "./products.module.css";
import { useState } from "react";
import { FaAngleDown, FaAngleRight, FaList } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const data = { title: "women's cord lace", price: "19,000" };

const products = Array.from({ length: 12 }, () => data);

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div className={classes.banner}>
        <h1>Grab up to 40% discount on purchase</h1>
      </div>

      <ul className={classes.sub_menu}>
        <li>
          <FaList /> Categories
        </li>
        <li>
          Women <FaAngleDown />
        </li>
        <li>
          <HiOutlineAdjustmentsHorizontal />
          Filtered by:
        </li>
        <li>
          Size <FaAngleRight />
        </li>
        <li>
          Price <FaAngleRight />
        </li>
        <li>
          Sort by <FaAngleDown />
        </li>
      </ul>

      <div className={classes.box}>
        <h2>All stylist attire for you</h2>
        <div className={classes.products}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className={classes.pages}>
          <label htmlFor="page">Page</label>
          <input
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.value)}
          />
          <p>of 2</p>
        </div>
      </div>
    </>
  );
}

export default Products;
