import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>CHICAGO THIN CRUST</h1>
            <p>
            Right when we take that first bite of warm pizza crust topped with tomato sauce and cheese,
             our taste buds are stimulated by glutamate, 
             and so we’re hooked and want more. Some common pizza toppings 
             like mushrooms can even add more glutamate, enhancing the flavor.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
