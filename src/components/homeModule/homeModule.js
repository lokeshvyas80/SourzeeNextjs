import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUsSection from "./component/aboutUsSection";
import ProductSection from "./component/productSection";
import SupplierNetwork from "./component/supplierNetwork";
import ExperiencesModule from "./component/experiencesModule";
import MaterialsModule from "./component/materialsModule";
import TestimonialsModule from "./component/testimonialsModule";
import FandqModule from "./component/fandqModule";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const HomeModule = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src="../images/home/hero-img.png" alt="hero" />
          <Carousel.Caption style={{top: "5.25rem"}}>
            <h6 style={{
                fontFamily: "'Inter', serif",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "35px",
                letterSpacing: "0.2em",
                textAlign: "center",
            }}>
            sourcezee</h6>
            <h3
            style={{
                fontFamily: "'Merriweather', serif",
                fontSize: "42px",
                fontWeight: "700",
                lineHeight: "63px",
                textAlign: "center"
            }}>See Sourcezee New Range Of Indoor Furniture</h3>
            <p
            style={{
                fontFamily: "'Inter', serif",
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "35px",
                textAlign: "center",
            }}>
            Classic meet modern living, Sourcezee has a fantastic range of <br />indoor furniture, perfect for any modern home.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src="../images/home/hero-img.png" alt="hero" />
          <Carousel.Caption style={{top: "5.25rem"}}>
            <h6 style={{
                fontFamily: "'Inter', serif",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "35px",
                letterSpacing: "0.2em",
                textAlign: "center",
            }}>
            sourcezee</h6>
            <h3
            style={{
                fontFamily: "'Merriweather', serif",
                fontSize: "42px",
                fontWeight: "700",
                lineHeight: "63px",
                textAlign: "center"
            }}>See Sourcezee New Range Of Indoor Furniture</h3>
            <p
            style={{
                fontFamily: "'Inter', serif",
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "35px",
                textAlign: "center",
            }}>
            Classic meet modern living, Sourcezee has a fantastic range of <br />indoor furniture, perfect for any modern home.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../images/home/hero-img.png" alt="hero" />
          <Carousel.Caption style={{top: "5.25rem"}}>
            <h6 style={{
                fontFamily: "'Inter', serif",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "35px",
                letterSpacing: "0.2em",
                textAlign: "center",
            }}>
            sourcezee</h6>
            <h3
            style={{
                fontFamily: "'Merriweather', serif",
                fontSize: "42px",
                fontWeight: "700",
                lineHeight: "63px",
                textAlign: "center"
            }}>See Sourcezee New Range Of Indoor Furniture</h3>
            <p
            style={{
                fontFamily: "'Inter', serif",
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "35px",
                textAlign: "center",
            }}>
            Classic meet modern living, Sourcezee has a fantastic range of <br />indoor furniture, perfect for any modern home.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <AboutUsSection />

      <ProductSection />

      <SupplierNetwork />

      <ExperiencesModule />

      <MaterialsModule />

      <TestimonialsModule />

      <FandqModule />
    </>
  );
};

export default HomeModule;
