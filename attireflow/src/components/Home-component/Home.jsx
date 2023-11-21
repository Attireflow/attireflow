import React, { useState } from 'react';
import Home_css from "./Home.module.css";

function Home() {


  return (
    <main className={Home_css.home}>
      <div className={`${Home_css.hero_section} header-background`}></div>
    </main>
  );
}

export default Home