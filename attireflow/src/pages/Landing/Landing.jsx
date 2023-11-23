import classes from "./landing.module.css";
import products from "./products";
import shippingTruck from "assets/shipping_truck.svg";
import customerSupport from "assets/customer_support.svg";
import qualityTag from "assets/quality_tag.svg";
import paymentCard from "assets/payment_card.svg";

function Landing() {
  return (
    <main className={classes.home}>
      <div className={`${classes.hero_section} header-background`}>
        <h1>
          Discover Your Heritage In <br /> Every Thread
        </h1>
        <p>
          Step into a world where tradition and <br />
          fashion unite. Our native attire collections <br /> celebrate culture
          with style.
        </p>
        <button className={classes.hero_btn}>Shop Now</button>
        <div className={classes.stats}>
          <div>
            <h2>75m+</h2>
            <p>Customers</p>
          </div>
          <hr />
          <div>
            <h2>20+</h2>
            <p>Stores</p>
          </div>
          <hr />
          <div>
            <h2>200K+</h2>
            <p>Monthly visits</p>
          </div>
        </div>
      </div>
      <div className={classes.collection_section}>
        <h3>
          Explore Our Unique Collection of Exclusive <br /> Categories
        </h3>
        <div className={classes.collections}>
          <div className={`${classes.collection_product} product-background`}>
            <p>Cord Lace Attire</p>
            <p>200+</p>
          </div>
          <div className={`${classes.collection_product} product-background`}>
            <p>Kampala Attire</p>
            <p>250+</p>
          </div>
        </div>
        <div className={classes.mid_collection}>
          <div className={`${classes.collection_product} product-background`}>
            <p>Ankara Attire</p>
            <p>1000+</p>
          </div>
        </div>
        <div className={classes.collections}>
          <div className={`${classes.collection_product} product-background`}>
            <p>Plain Cashmere Attire</p>
            <p>500+</p>
          </div>
          <div className={`${classes.collection_product} product-background`}>
            <p>Checkers Cashmere Attire</p>
            <p>500+</p>
          </div>
        </div>
      </div>
      <div className={classes.product_section}>
        <h3>Several unique attires are new in stock</h3>
        <div className={classes.products}>
          {products.map((item) => {
            const { image, name, price, rate, id } = item;
            return (
              <div className={classes.product} key={id}>
                {/* <img src={image} alt="product" /> */}
                <div className={`${classes.product_img}`}>
                  <img src={image} alt="product" />
                  <div className={classes.heart}>
                    <box-icon name="heart" color="#085cb2"></box-icon>
                  </div>
                </div>
                <p>{name}</p>
                <p>&#x20A6; {price}</p>

                <div className={classes.rates}>
                  {Array.from([...Array(5)], () => {
                    return (
                      <p>
                        <box-icon
                          name="star"
                          type="solid"
                          color="orange"
                        ></box-icon>
                      </p>
                    );
                  })
                    .splice(0, rate)
                    .concat(
                      [...Array(5 - rate)].map(() => {
                        return (
                          <p>
                            <box-icon
                              name="star"
                              type="solid"
                              color="#D6EAFF"
                            ></box-icon>
                          </p>
                        );
                      })
                    )}
                </div>

                {/* <box-icon name="star" type="solid" color="orange"></box-icon> */}
                <button className={classes.product_btn}>Shop Now</button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.services_section}>
        <h3>What Makes Us the Preferred <br /> Choice?</h3>
        <div className={classes.service_group}>
          <div className={classes.service}>
            <img src={shippingTruck} alt="shipping truck" />
            <h3>SECURE SHIPPING</h3>
          </div>
          <div className={classes.service}>
            <img src={paymentCard} alt="shipping truck" />
            <h3>EASY PAYMENT</h3>
          </div>
          <div className={classes.service}>
            <img src={qualityTag} alt="shipping truck" />
            <h3>QUALITY ATTIRES</h3>
          </div>
          <div className={classes.service}>
            <img src={customerSupport} alt="shipping truck" />
            <h3>24/7 SUPPORT</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Landing;
