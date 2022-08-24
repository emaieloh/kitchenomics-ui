import React, { useContext } from "react";
import MyContext from "../../MyContext/MyContext";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import beef from "../../images/beef.jpg";
import chicken from "../../images/chicken.jpg";
import fish from "../../images/fish.jpg";
import pork from "../../images/pork.jpg";
import shrimp from "../../images/shrimp.jpg";
import "./CarouselComponent.css";

const CarouselComponent = () => {
  const { checkIngredients } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className="carousel-container d-flex justify-content-evenly align-items-center">
      <Carousel className="carousel-component m-0 rounded-2" fade>
        <Carousel.Item interval={3000}>
          <img
            id="https://api.edamam.com/api/recipes/v2/5e46ea306bc00e6ae0bfc28a2036ee34?type=public&app_id=2f5498b7&app_key=ccb0994fa759c8bb890e6ac4e7124c19"
            className="d-block w-100 rounded-2"
            src={beef}
            alt="Roast beef sirloin with simple Asian sauce"
            onClick={(e) => checkIngredients(e.target.id, navigate)}
          />
          <Carousel.Caption>
            <h2>Roast beef sirloin with simple Asian sauce</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            id="https://api.edamam.com/api/recipes/v2/2463f2482609d7a471dbbf3b268bd956?type=public&app_id=2f5498b7&app_key=ccb0994fa759c8bb890e6ac4e7124c19"
            className="d-block w-100 rounded-2"
            src={chicken}
            alt="Catalan chicken"
            onClick={(e) => checkIngredients(e.target.id, navigate)}
          />
          <Carousel.Caption>
            <h2>Catalan chicken</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            id="https://api.edamam.com/api/recipes/v2/89ac0c2f967c3a185d00d8e6c33c2215?type=public&app_id=2f5498b7&app_key=ccb0994fa759c8bb890e6ac4e7124c19"
            className="d-block w-100 rounded-2"
            src={fish}
            alt="Fish with peas and lettuce"
            onClick={(e) => checkIngredients(e.target.id, navigate)}
          />
          <Carousel.Caption>
            <h2>Fish with peas and lettuce</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            id="https://api.edamam.com/api/recipes/v2/ef31a2191212cc12d6119030908409cd?type=public&app_id=2f5498b7&app_key=ccb0994fa759c8bb890e6ac4e7124c19"
            className="d-block w-100 rounded-2"
            src={pork}
            alt="Rarebit pork chops"
            onClick={(e) => checkIngredients(e.target.id, navigate)}
          />
          <Carousel.Caption>
            <h2>Rarebit pork chops</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            id="https://api.edamam.com/api/recipes/v2/f744bdd7c7d95a9f48353633c3c6a4d5?type=public&app_id=2f5498b7&app_key=ccb0994fa759c8bb890e6ac4e7124c19"
            className="d-block w-100 rounded-2"
            src={shrimp}
            alt="Shrimp piri piri"
            onClick={(e) => checkIngredients(e.target.id, navigate)}
          />
          <Carousel.Caption>
            <h2>Piri piri shrimp</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className="pb-5">Kitchenomics</h1>
    </div>
  );
};

export default CarouselComponent;
