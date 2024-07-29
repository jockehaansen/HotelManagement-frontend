import { useState, useEffect } from "react";

const Home = () => {
  const reviews = [
    {
      guest: "Guest one",
      rating: 4,
      shortText: "Amazing stay!",
      longText:
        "Our family had an amazing time at the Hotel, great location and staff!",
    },
    {
      guest: "Guest two",
      rating: 5,
      shortText: "Beautiful Hotel!",
      longText:
        "Beautiful Hotel, close to the bay and city with great opportunities to explore the culture here!",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentReviewIndex];

  return (
    <>
      <div>
        <h1 className="text-3xl text-center mt-12 mb-28">
          Welcome to the Hotel
        </h1>
      </div>
      <div className="flex flex-row  w-full justify-between ">
        <div className="ml-4 border-slate-400 border-opacity-80 border-2 p-2">
          <h1 className="text-center text-xl mb-2">
            What to expect from your stay:
          </h1>
          <p className="max-w-lg">
            Enjoy all-inclusive, with a bay-side pool area. <br></br>Take
            advantage of our proximity to the city, explore resturants, shopping
            center and historically filled buildings.
          </p>
        </div>
        <div className="mr-4">
          <div class="card bg-white shadow-lg rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold mb-2">{currentReview.guest}</h3>
            <p className="text-yellow-500 mb-2">{currentReview.rating}</p>
            <div class="card-body">
              <h4 class="text-lg font-semibold mb-2">
                {currentReview.shortText}
              </h4>
              <p className="text-gray-700">{currentReview.longText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
