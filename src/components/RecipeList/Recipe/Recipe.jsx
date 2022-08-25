import React, { useContext, useState, useEffect } from "react";
import MyContext from "../../../MyContext/MyContext";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./Recipe.css";
import HealthLabels from "./HealthLabels";
import NutrientsList from "../../NutrientsList/NutrientsList";
import Energy from "./Energy";
import axios from "axios";

const Recipe = (props) => {
  const {
    label,
    image,
    href,
    healthLabels,
    energy,
    servings,
    totalNutrients,
  } = props;

  const { checkIngredients, favorites, setFavorites } = useContext(MyContext);

  const [nutrientsList1, setNutrientsList1] = useState([]);
  const [nutrientsList2, setNutrientsList2] = useState([]);

  const navigate = useNavigate();

  const addFavorite = async () => {
    const { data: favorite } = await axios.post(
      "http://localhost:8080/favorites/add",
      {
        label,
        image,
        href,
        healthLabels,
        energy,
        servings,
        totalNutrients,
      }
    );
    setFavorites([...favorites, favorite]);
  };

  useEffect(() => {
    setNutrientsList1(["PROCNT", "FAT", "CHOCDF"]);
    setNutrientsList2(["CHOLE", "NA", "CA", "MG", "K", "FE"]);
  }, []);

  return (
    <Card className="col-sm-12 col-md-6 col-lg-4 d-inline-block align-top recipe-font">
      <Row className="py-1 px-3">
        <div onClick={addFavorite} className="text-end me-2 favorite">
          Add to Favorites
        </div>
      </Row>
      <Row className="p-3">
        <Col className="col-4">
          <Card.Img src={image} alt={label} />
        </Col>
        <Col>
          <Card.Subtitle
            onClick={() => checkIngredients(href, navigate)}
            className="ingredients-link recipe-name"
          >
            {label}
          </Card.Subtitle>
          <HealthLabels healthLabels={healthLabels} />
        </Col>
      </Row>
      <Container id="shaded">
        <Row className="p-3 d-flex justify-content-center">
          <Col
            id="recipe-per-serving"
            className="col-md-6 col-lg-4 text-center"
          >
            <Energy energy={energy} servings={servings} />
          </Col>
          <Col className="col-md-6 col-lg-4">
            <NutrientsList
              totalNutrients={totalNutrients}
              nutrientsList={nutrientsList1}
              css={"nutrient-per-serving pfc ps-0"}
            />
          </Col>
          <Col className="col-md-6 col-lg-4">
            <NutrientsList
              totalNutrients={totalNutrients}
              nutrientsList={nutrientsList2}
              css={"nutrient-per-serving ps-0"}
            />
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Recipe;
