import React from "react";

const MarketStories = () => {
  const data = [
    {
      id: 1,
      image: "/assets/sunset6.webp",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is",
    },
    {
      id: 2,
      image: "/assets/sunset6.webp",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is",
    },
    {
      id: 3,
      image: "/assets/sunset6.webp",
      title: "The Coldest Sunset",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is",
    },
  ];

  return (
    <div>
      <h1 className="lg:block hidden text-red-400 text-[30px] font-bold opacity-60 border-2 bg-gray-200 p-2 mb-4">
        Market Stories
      </h1>
      {data.map((item) => (
        <Post key={item.id} data={item} />
      ))}
    </div>
  );
};
function Post({ data }) {
  return (
    <div className="mb-4">
      <img
        src={data.image}
        alt={data.title}
        className="lg:w-[234px] lg:h-[130px]"
      />
      <div className="border-2 bg-white p-4 shadow-md rounded-b-lg">
        <h1 className="font-semibold lg:text-[13px] text-[10px]">
          {data.title}
        </h1>
        <p className="lg:text-[10px] text-[7px] lg:w-[200px]">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default MarketStories;
