import REACT from "react";
import REACTDOM from "react-dom/client";
import { LOGO_URL } from "./utils/constants";

//import logo from "./assets/logo.jpg";
/**
 * Components of the app
 * - Header: The header of the app
 *    -logo: The logo of the app
 *     -nav-items: The navigation items of the app
 * - Body: The body of the app
 *   - Search: The search bar of the app
 *  - RestaurantList: The list of restaurants
 *  - RestaurantCard: The card of the restaurant
 * -footer: The footer of the app
 */

const Header = () => {
  return (
    <div id="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};
//lisst of objects
const resObj = [
  {
    info: {
      id: "10365",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/e9e0022b-4d44-4bd5-a0a5-6ae98e9745d6_10365.jpg",
      locality: "CC1 (57)",
      areaName: "Bidhannagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-17 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-b3622b87-296b-4975-a39e-40214b704514",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/pizza-hut-cc1-57-bidhannagar-rest10365",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "240184",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/d752b087-d4be-483b-a45b-305ff00556e6_240184.jpg",
      locality: "Bidhannagar",
      areaName: "Salt Lake",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.5,
      parentId: "166",
      avgRatingString: "4.5",
      totalRatingsString: "30K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-04-22 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/bolt%206.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/bolt%206.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "3.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-52e8b7cf-8779-42e6-877d-1f509caede47",
    },
    cta: {
      link: "https://www.swiggy.com/city/kolkata/burger-king-bidhannagar-salt-lake-rest240184",
      type: "WEBLINK",
    },
  },
];

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

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        {resObj.map((retaurantcard) => (
          <RestCard resObj={retaurantcard} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = REACTDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
