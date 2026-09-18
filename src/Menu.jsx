import { useState } from "react";
import Dish from "./Dish";
import Card from "./Card";
import CategoryBar from "./CategoryBar";
import menu from "./data";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "main course",
    "side dish",
  ];

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter(
          (dish) => dish.category === selectedCategory
        );

  if (filteredMenu.length === 0) {
    return (
      <div>
        <CategoryBar
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <p>No dishes found in this category.</p>
      </div>
    );
  }

  return (
    <div>
      <CategoryBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="card-container">
        {filteredMenu.map((dish) => (
          <Card key={dish.id}>
            <Dish
              name={dish.name}
              price={dish.price}
              spicy={dish.spicy}
              onAdd={() => {}}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Menu;