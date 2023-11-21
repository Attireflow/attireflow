import { useState } from 'react';
import "boxicons";
import { Route, Routes } from 'react-router-dom'
import {Footer, Nav, Home} from "./components";
// import Header from "components/Header";


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Home/>}/>

        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
