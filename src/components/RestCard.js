const RestCard = ({ resObj }) => {
  if (!resObj) return null;

  const {
    info: { name, cuisines, avgRating, costForTwo },
  } = resObj;

  return (
    <div className="card">
      <img
        className="card-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/40a20a8d-ec42-461a-b83c-cf8903a69f31_674917.jpg"
        alt="Cakes"
      />
      <div>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
        <h5>{costForTwo}</h5>
      </div>
    </div>
  );
};
export default RestCard;
