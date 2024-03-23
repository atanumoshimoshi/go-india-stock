import { useState } from "react";
import DiscussionForm from "./components/DiscussionForm";
import MarketStories from "./components/MarketStories";

export default function Home() {
  const [open, setOpen] = useState(true);
  const [showDiscussionForm, setShowDiscussionForm] = useState(DiscussionForm);
  const [showMarketStories, setShowMarketStories] = useState();
  const [showDiscussionForm1, setShowDiscussionForm1] =
    useState(DiscussionForm);
  const [showMarketStories1, setShowMarketStories1] = useState(MarketStories);

  const handleMenuClick = (index) => {
    if (index === 0) {
      setShowDiscussionForm(true);
      // setShowDiscussionForm1(true);
      setShowMarketStories(false);
      // setShowMarketStories1(false)
    } else if (index === 1) {
      setShowDiscussionForm(false);
      // setShowDiscussionForm1(false);

      setShowMarketStories(true);
      // setShowMarketStories1(true);
    }
  };

  const minus = [
    {
      title: "Discussion Form",
      image: "/assets/img1.png",
      image1: "/assets/whitearrow.png",
    },
    {
      title: "Market Stories",
      image: "/assets/img3.png",
      image1: "/assets/whitearrow.png",
    },
    { title: "Sentiment", image: "/assets/img2.png" },
    { title: "Market", image: "/assets/img4.png" },
    { title: "Sector", image: "/assets/img5.jpg", gap: true },
    { title: "Watchlist", image: "/assets/img6.png" },
    { title: "Events", image: "/assets/img1.png" },
    { title: "News/Interview", image: "/assets/img2.png" },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "lg:w-72 w-60" : "w-8"
        } duration-300 h-[850px]  bg-gray-600 relative overflow-y-scroll overflow-x-hidden`}
      >
        <img
          src="/assets/arrow.png"
          alt="arrows"
          className={`absolute cursor-pointer rounded-full -right-0 lg:top-[30%] top-[26%]  w-7 border-2 border-white ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center mb-4 pb-2 border-b-2 border-gray-500">
          <img
            src="/assets/contact.png"
            className={`cursor-pointer duration-500 w-8 h-8 rounded-[50%] ${
              !open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium lg:text-xl text-[8px] 
          duration-300 ${!open && "scale-0"}`}
          >
            Hello,User
          </h1>
        </div>
        <div className="">
          <ul>
            {minus.map((menu, index) => (
              <li
                key={index}
                className={`text-gray-300 lg:text-sm text-[8px] flex items-center lg:gap-x-4 gap-x-2 cursor-pointer lg:p-2 p-[13px] bg-light-white hover:bg-black rounded-md ${
                  menu.gap ? "lg:mt-0 mt-2" : "mt-2"
                }`}
                onClick={() => handleMenuClick(index)}
              >
                <img
                  src={menu.image}
                  className="lg:w-8 w-4 lg:h-8 h-4 rounded-[50%]"
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
                {index === 0 && (
                  <img src={menu.image1} className="w-4 h-4 lg:ml-6" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:block hidden">
        <div
          className={` p-7 flex ${
            !open ? "gap-20  items-start justify-center" : "gap-4"
          }  flex-1 h-screen`}
        >
          {showDiscussionForm1 && <DiscussionForm />}
          {showMarketStories1 && <MarketStories />}
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex justify-center items-start w-[100%]">
          <button
            className={`border-2 border-black w-[50%] ${
              showDiscussionForm ? "bg-gray-400" : "bg-gray-200"
            }`}
            onClick={() => handleMenuClick(0)}
          >
            DiscussionForm
          </button>
          <button
            className={`border-2 border-black w-[50%] ${
              showMarketStories ? "bg-gray-400" : "bg-gray-200"
            }`}
            onClick={() => handleMenuClick(1)}
          >
            MarketStories
          </button>
        </div>
        <div>
          <div
            className={` p-7 flex ${
              !open ? "gap-20  items-start justify-center" : "gap-4"
            }  overflow-y-scroll flex-1 h-screen`}
          >
            {showDiscussionForm && <DiscussionForm />}
            {showMarketStories && <MarketStories />}
          </div>
        </div>
      </div>
    </div>
  );
}
