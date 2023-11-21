import classes from "./landing.module.css";

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
    </main>
  );
}

export default Landing;
