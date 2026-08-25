import React from 'react';
import Card from './Card';

const menu = [
  { name: "Doro wot", price: "120 ETB" },
  { name: "Injera", price: "80 ETB" },
  { name: "Shiro wot", price: "100 ETB" },
  { name: "Doro wot", price: "120 ETB" },
  { name: "Injera", price: "80 ETB" },
  { name: "Shiro wot", price: "100 ETB" }
];

function Main() {
  return (
    <div>
      <p className="welcome-message">Welcome to my restaurant!</p>

      <div className="card-container">
        {menu.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;