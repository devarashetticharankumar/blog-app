const MenuItems = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, category, price, desc, img } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4 className="title">{title}</h4>
                <h4 className="price">Rs:{price}/-</h4>
              </header>
              <div className="underline-2"></div>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuItems;
