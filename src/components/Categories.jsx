const Categories = ({ categories, filterItems }) => {
  return (
    <div className="category-section">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => filterItems(category)}
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
