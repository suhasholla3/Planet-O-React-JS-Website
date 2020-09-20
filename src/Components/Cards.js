import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Experience Planet O like never before !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.indianexpress.com/2020/06/astronuat-space-pixabay-759.jpg"
              text="Explore the Planet O Like never before with US!"
              label="Adventure"
              path="/services"
            />
            </ul>
            <ul className="cards__items">
             <CardItem
              src="https://www.orfonline.org/wp-content/uploads/2019/08/Space.jpg"
              text="The view once in lifetime !"
              label="Experience"
              path="/services"
            />
             <CardItem
              src="https://i2.wp.com/www.humansinspace.org/wp/wp-content/uploads/2014/02/moon-landing.jpg?fit=1038%2C404&ssl=1"
              text="How about a Beer in space ?"
              label="Chill"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
