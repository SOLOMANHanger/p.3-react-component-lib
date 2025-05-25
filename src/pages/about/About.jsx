import React from "react";
import NavBar from "../../components/NavBar";
import Content from "./Content";
import Footer from "../../components/Footer";
import Pricing from "../../components/Pricing";


export default function About() {
  return (
    <>
      <NavBar />
      <main>
        <Pricing />
        <Content />
      </main>
      <Footer />
    </>
  );
}
