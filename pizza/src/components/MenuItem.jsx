import "../styles/menu.css";

function MenuItem({ image, name, content, price }) {
  return (
    <div className="menuItem">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h1>{name}</h1>
            <h6>{content}</h6>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
