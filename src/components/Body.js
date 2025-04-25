import RestCard from "./RestCard";
import { useState, useEffect } from "react";
import resObj from "../utils/mockData";
import { RESTAURANT_API } from "../utils/constants";

const Body = () => {
  const [allres] = useState([
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
    {
      info: {
        id: "772029",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/b71fea5a-30ba-437a-99b3-e3e51718a4a4_772029.JPG",
        locality: "Sector 5",
        areaName: "Salt Lake",
        costForTwo: "₹400 for two",
        cuisines: ["American", "Fast Food"],
        avgRating: 4.5,
        parentId: "630",
        avgRatingString: "4.5",
        totalRatingsString: "2.5K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-04-22 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
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
                    imageId: "Rxawards/_CATEGORY-Burger.png",
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
          subHeader: "AT ₹129",
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
        context: "seo-data-df0c9788-32a4-4355-b5dc-5be46494e657",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/mcdonalds-sector-5-salt-lake-rest772029",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "14122",
        name: "Wow! Momo",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/aec70cb1-9715-4df3-a3a1-c83cf8b5acf5_14122.jpg",
        locality: "City centre 1",
        areaName: "Bidhannagar",
        costForTwo: "₹300 for two",
        cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
        avgRating: 4.5,
        parentId: "1776",
        avgRatingString: "4.5",
        totalRatingsString: "27K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-04-22 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/bolt%206.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Chinese.png",
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
                    description: "bolt!",
                    imageId: "bolt/bolt%206.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Chinese.png",
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
          subHeader: "AT ₹99",
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
        context: "seo-data-df0c9788-32a4-4355-b5dc-5be46494e657",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/wow-momo-city-centre-1-bidhannagar-rest14122",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "23925",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/9917424c-c633-4963-b502-caab0a3fa88a_23925.JPG",
        locality: "BT Road",
        areaName: "Bidhannagar",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.6,
        parentId: "2456",
        avgRatingString: "4.6",
        totalRatingsString: "24K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-04-22 22:55:00",
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
          subHeader: "AT ₹119",
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
        context: "seo-data-df0c9788-32a4-4355-b5dc-5be46494e657",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/dominos-pizza-bt-road-bidhannagar-rest23925",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "203767",
        name: "LunchBox - Meals and Thalis",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/9cf5aabc-f414-408f-ab36-6324b2503111_203767.jpg",
        locality: "SECTOR V",
        areaName: "Bidhannagar",
        costForTwo: "₹300 for two",
        cuisines: ["Thalis", "North Indian", "Biryani"],
        avgRating: 4.6,
        parentId: "4925",
        avgRatingString: "4.6",
        totalRatingsString: "5.6K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-04-22 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
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
        context: "seo-data-df0c9788-32a4-4355-b5dc-5be46494e657",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/lunchbox-meals-and-thalis-sector-v-bidhannagar-rest203767",
        type: "WEBLINK",
      },
    },
  ]);
  const [resObj, setResObj] = useState([
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
    {
      info: {
        id: "772029",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/b71fea5a-30ba-437a-99b3-e3e51718a4a4_772029.JPG",
        locality: "Sector 5",
        areaName: "Salt Lake",
        costForTwo: "₹400 for two",
        cuisines: ["American", "Fast Food"],
        avgRating: 4.5,
        parentId: "630",
        avgRatingString: "4.5",
        totalRatingsString: "2.5K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-04-22 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
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
                    imageId: "Rxawards/_CATEGORY-Burger.png",
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
          subHeader: "AT ₹129",
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
        context: "seo-data-df0c9788-32a4-4355-b5dc-5be46494e657",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/mcdonalds-sector-5-salt-lake-rest772029",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "14122",
        name: "Wow! Momo",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/aec70cb1-9715-4df3-a3a1-c83cf8b5acf5_14122.jpg",
        locality: "City centre 1",
        areaName: "Bidhannagar",
        costForTwo: "₹300 for two",
        cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
        avgRating: 4.5,
        parentId: "1776",
        avgRatingString: "4.5",
        totalRatingsString: "27K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-04-22 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/bolt%206.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Chinese.png",
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
                    description: "bolt!",
                    imageId: "bolt/bolt%206.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Chinese.png",
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
          subHeader: "AT ₹99",
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
        context: "seo-data-df0c9788-32a4-4355-b5dc-5be46494e657",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/wow-momo-city-centre-1-bidhannagar-rest14122",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "23925",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/9917424c-c633-4963-b502-caab0a3fa88a_23925.JPG",
        locality: "BT Road",
        areaName: "Bidhannagar",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.6,
        parentId: "2456",
        avgRatingString: "4.6",
        totalRatingsString: "24K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-04-22 22:55:00",
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
          subHeader: "AT ₹119",
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
        context: "seo-data-df0c9788-32a4-4355-b5dc-5be46494e657",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/dominos-pizza-bt-road-bidhannagar-rest23925",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "203767",
        name: "LunchBox - Meals and Thalis",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/9cf5aabc-f414-408f-ab36-6324b2503111_203767.jpg",
        locality: "SECTOR V",
        areaName: "Bidhannagar",
        costForTwo: "₹300 for two",
        cuisines: ["Thalis", "North Indian", "Biryani"],
        avgRating: 4.6,
        parentId: "4925",
        avgRatingString: "4.6",
        totalRatingsString: "5.6K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-04-22 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
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
        context: "seo-data-df0c9788-32a4-4355-b5dc-5be46494e657",
      },
      cta: {
        link: "https://www.swiggy.com/city/kolkata/lunchbox-meals-and-thalis-sector-v-bidhannagar-rest203767",
        type: "WEBLINK",
      },
    },
  ]);
  const [isFiltered, setFilteredRes] = useState(false);

  useEffect(() => {
    const fetchRes = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5812837&lng=88.4261513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json?.data?.cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRes();
  }, []);
  const handleFilterClick = () => {
    if (isFiltered) {
      // If already filtered, reset to original
      setResObj(allres);
    } else {
      // Filter top rated
      const filteredData = allres.filter(
        (restaurant) => restaurant.info.avgRating > 4.3
      );
      setResObj(filteredData);
    }
    setFilteredRes(!isFiltered); // Toggle state
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterClick}>
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
