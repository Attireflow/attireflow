import classes from "./landing.module.css";

function Landing() {
  return (
    <main className={classes.home}>
      <div className={`${classes.hero_section} header-background`}>
        <h1>
          Discover Your Heritage In <br /> Every Thread
        </h1>
        <p>
          Step into a world where tradition and fashion unite. Our native attire
          collections celebrate culture with style.
        </p>
        <button>Shop Now</button>
        <div className={classes.stats}>
          <div>
            <h1>75m+</h1>
            <p>Customers</p>
          </div>
          <hr />
          <div>
            <h1>20+</h1>
            <p>Stores</p>
          </div>
          <hr />
          <div>
            <h1>200K+</h1>
            <p>Monthly visits</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Landing;
