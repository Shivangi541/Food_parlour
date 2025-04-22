import RestCard from "./RestCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        {resObj.map((restaurantcard) => (
          <RestCard key={restaurantcard.info.id} resObj={restaurantcard} />
        ))}
      </div>
    </div>
  );
};
export default Body;
