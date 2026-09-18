import { useState } from "react";
import Dish from "./componet/Dish";
import Card from "./componet/Card";
import CategoryBar from "./CategoryBar";
import menu from "./componet/data";
function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [orderTotal, setOrderTotal] = useState(0);

  const categories = [
    "All",
    "main course",
    "side dish",
  ];

  function handleAdd(price) {
    setOrderTotal((currentTotal) => currentTotal + price);
  }

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

        <h2>Order Total: {orderTotal} ETB</h2>
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
              onAdd={handleAdd}
            />
          </Card>
        ))}
      </div>

      <h2>Order Total: {orderTotal} ETB</h2>
    </div>
  );
}

export default Menu;