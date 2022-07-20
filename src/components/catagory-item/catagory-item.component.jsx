import "./catagory-item.styles.scss";

const CatagoryItem = (catagory) => {
  const { imageUrl, title } = catagory;

  return (
    <div className="catagory-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        // style={{ backgroundImage: "url('https://i.ibb.co/R70vBrQ/men.png')" }}
      />
      <div className="catagory-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CatagoryItem;
