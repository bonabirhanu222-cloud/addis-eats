import React from 'react';
import Dish from './Dish';

const menu = [
  { id: 1, name: "Doro wot", price: 120, category: "main course", spicy: true },
  { id: 2, name: "Injera", price: 80, category: "side dish", spicy: false },
  { id: 3, name: "Shiro wot", price: 100, category: "main course", spicy: true },
  { id: 4, name: "Doro wot", price: 120, category: "main course", spicy: true },
  { id: 5, name: "Injera", price: 80, category: "side dish", spicy: false },
  { id: 6, name: "Shiro wot", price: 100, category: "main course", spicy: true },
  { id: 7, name: "Doro wot", price: 120, category: "main course", spicy: true },
  { id: 8, name: "Injera", price: 80, category: "side dish", spicy: false },
  { id: 9, name: "Shiro wot", price: 100, category: "main course", spicy: true },
  { id: 10, name: "Doro wot", price: 120, category: "main course", spicy: true },
  { id: 11, name: "Injera", price: 80, category: "side dish", spicy: false },
  { id: 12, name: "Shiro wot", price: 100, category: "main course", spicy: true }
];

function Main() {
  return (
    <div>
      <p className="welcome-message">
        Welcome to my restaurant!
      </p>

      <div className="card-container">
        {menu.map((item) => (
          <Dish
            key={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            spicy={item.spicy}
            currency="ETB"
          />
        ))}
      </div>
    </div>
  );
}

export default Main;