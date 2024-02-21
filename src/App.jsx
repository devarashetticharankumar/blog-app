import { useState } from "react";
import data from "../data";
import MenuItems from "./components/MenuItems";
import Categories from "./components/Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(data);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newfilterItem = data.filter((item) => item.category === category);
    setMenuItems(newfilterItem);
  };
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />

        <MenuItems items={menuItems} />
      </section>
    </main>
  );
}

export default App;
