import React from "react";
import { Carousel } from "react-bootstrap";
import beef from "../images/beef.jpg";
import chicken from "../images/chicken.jpg";
import fish from "../images/fish.jpg";
import pork from "../images/pork.jpg";
import shrimp from "../images/shrimp.jpg";

const CarouselComponent = () => {
  return (
    <Carousel className="carousel-component mx-auto mt-5 pt-5" fade>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 rounded-2"
          src={beef}
          alt="Roast sirloin of beef"
        />
        <Carousel.Caption>
          <div>Roast sirloin of beef</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 rounded-2"
          src={chicken}
          alt="Catalan chicken"
        />
        <Carousel.Caption>
          <div>Catalan chicken</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 rounded-2"
          src={fish}
          alt="Fish with peas and lettuce"
        />
        <Carousel.Caption>
          <div>Fish with peas and lettuce</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 rounded-2" src={pork} alt="Pork chops" />
        <Carousel.Caption>
          <div>Pork chops</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 rounded-2"
          src={shrimp}
          alt="Piri piri shrimp"
        />
        <Carousel.Caption>
          <div>Piri piri shrimp</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
