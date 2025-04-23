import RestCard from "./RestCard";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            resObj = resObj.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            console.log("Filtered Restaurants:", resObj);
          }}
        >
          Top rated Restaurants
        </button>
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
