import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Przykładowy tytuł 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum accusantium earum at dignissimos illum libero culpa quibusdam cupiditate ullam tempore hic, animi porro fuga aliquid asperiores, nam sit laboriosam odit inventore.",
  },
  {
    id: 2,
    title: "Przykładowy tytuł 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum accusantium earum at dignissimos illum libero culpa quibusdam cupiditate ullam tempore hic, animi porro fuga aliquid asperiores, nam sit laboriosam odit inventore.",
  },
  {
    id: 3,
    title: "Przykładowy tytuł 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum accusantium earum at dignissimos illum libero culpa quibusdam cupiditate ullam tempore hic, animi porro fuga aliquid asperiores, nam sit laboriosam odit inventore. 3",
  },
  {
    id: 4,
    title: "Przykładowy tytuł 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum accusantium earum at dignissimos illum libero culpa quibusdam cupiditate ullam tempore hic, animi porro fuga aliquid asperiores, nam sit laboriosam odit inventore. 4",
  },
  {
    id: 5,
    title: "Przykładowy tytuł 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum accusantium earum at dignissimos illum libero culpa quibusdam cupiditate ullam tempore hic, animi porro fuga aliquid asperiores, nam sit laboriosam odit inventore. 5",
  },
  {
    id: 6,
    title: "Przykładowy tytuł 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum accusantium earum at dignissimos illum libero culpa quibusdam cupiditate ullam tempore hic, animi porro fuga aliquid asperiores, nam sit laboriosam odit inventore. 6",
  },
];

const getRandomImageUrl = () => {
  const randomId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/300/200?random=${randomId}`;
};

const ClockCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => Math.min(items.length - 1, prevIndex + 1));
    };
  
    return (
      <div className="flex flex-col md:mx-24 items-center justify-center">
        <div className=" flex items-center justify-between w-full mt-8 px-4 md:mr-0 md:mt-8">
            <h1 className="text-4xl md:mr-24 md:mb-8">Zegary</h1>
            <div className="md:hidden">
                <button
                    className="md:mx-4 px-4 py-2 bg-gray-200 rounded-lg mr-4 button-card-animation"
                    onClick={handlePrevClick}
                >
                    {"<"}
                </button>
                <button
                    className="px-4 py-2 bg-gray-200 rounded-lg button-card-animation"
                    onClick={handleNextClick}
                >
                    {">"}
                </button>
            </div>
        </div>
        <div className="flex flex-wrap">
          {items.slice(0, 6).map((item, index) => (
            <div
              key={item.id}
              className={`w-full sm:w-1/2 md:w-1/4 p-4  ${
                index === currentIndex ? "" : "hidden sm:block"
              }`}
            >
              <div className="bg-white rounded-lg shadow-md md:card-animation">
                <img
                  className="w-full h-80 object-cover rounded-t-lg"
                  src={getRandomImageUrl()}
                  alt={item.title}
                />
                <div className="p-4">
                  <h2 className="text-lg font-medium mb-2">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <button className="flex mx-auto mt-4 p-2 border-2 border-black rounded-2xl button-card-animation">Zobacz</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
  };
  
  export default ClockCards;

