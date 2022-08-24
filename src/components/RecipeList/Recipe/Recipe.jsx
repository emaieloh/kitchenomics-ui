import React, { useContext, useState, useEffect } from "react";
import MyContext from "../../../MyContext/MyContext";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./Recipe.css";
import HealthLabels from "./HealthLabels";
import NutrientsList from "../../NutrientsList/NutrientsList";
import Energy from "./Energy";

const Recipe = ({ recipe }) => {
  const { checkIngredients } = useContext(MyContext);
  const [nutrientsList1, setNutrientsList1] = useState([]);
  const [nutrientsList2, setNutrientsList2] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setNutrientsList1(["PROCNT", "FAT", "CHOCDF"]);
    setNutrientsList2(["CHOLE", "NA", "CA", "MG", "K", "FE"]);
  }, []);

  return (
    <Card className="col-sm-12 col-md-6 col-lg-4 d-inline-block align-top recipe-font">
      <Row className="p-3">
        <Col className="col-4">
          <Card.Img
            src={recipe.recipe.images.SMALL.url}
            alt={recipe.recipe.label}
          />
        </Col>
        <Col>
          <Card.Subtitle
            onClick={() => checkIngredients(recipe._links.self.href, navigate)}
            className="ingredients-link recipe-name"
          >
            {recipe.recipe.label}
          </Card.Subtitle>
          <HealthLabels healthLabels={recipe.recipe.healthLabels} />
        </Col>
      </Row>
      <Container id="shaded">
        <Row className="p-3 d-flex justify-content-center">
          <Col
            id="recipe-per-serving"
            className="col-md-6 col-lg-4 text-center"
          >
            <Energy
              energy={recipe.recipe.totalNutrients.ENERC_KCAL}
              servings={recipe.recipe.yield}
            />
          </Col>
          <Col className="col-md-6 col-lg-4">
            <NutrientsList
              totalNutrients={recipe.recipe.totalNutrients}
              nutrientsList={nutrientsList1}
              css={"nutrient-per-serving pfc ps-0"}
            />
          </Col>
          <Col className="col-md-6 col-lg-4">
            <NutrientsList
              totalNutrients={recipe.recipe.totalNutrients}
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
