import { useState } from 'react';
import { Link } from 'react-router-dom'; 

import BlogPhoto1 from './assets/blog1.jpg';
import BlogPhoto2 from './assets/blog2.jpg';
import BlogPhoto3 from './assets/blog3.jpg';


const items = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet debitis magni.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur voluptates ipsam maiores molestiae, illum voluptas, repellat dignissimos eius mollitia consequuntur voluptatum praesentium odit optio unde, accusamus id ullam cumque aperiam aspernatur?",
      photo: BlogPhoto1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet debitis magni.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur voluptates ipsam maiores molestiae, illum voluptas, repellat dignissimos eius mollitia consequuntur voluptatum praesentium odit optio unde, accusamus id ullam cumque aperiam aspernatur?",
      photo: BlogPhoto2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet debitis magni. 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cum accusantium earum at dignissimos illum libero culpa quibusdam cupiditate ullam tempore hic, animi porro fuga aliquid asperiores, nam sit laboriosam odit inventore. 3",
      photo: BlogPhoto3,
    },
  ];

export default function BlogCards() {
    const [currentIndex, setCurrentIndex] = useState(0);

  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => Math.min(items.length - 1, prevIndex + 1));
    };

  return (
    <>
        <div className='flex justify-center pb-4 mt-12'>
        <div className="flex items-center justify-center w-full px-4 mt-8 md:mr-0 md:mt-8">
            <h1 className="text-4xl md:mr-24 md:mb-8">Blog</h1>
            <div className="md:hidden pl-36">
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
        </div>
        <div className='flex md:mx-24 items-center justify-center '>
        {items.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className={`p-4 md:m-4 md:blog-animation flex flex-col border-white border-8 mb-16' ${
                index === currentIndex ? "" : "hidden sm:block"
              }`}
            >
              <div className="bg-white shadow-xl  rounded-lg">
                <img
                  className="w-full h-48 object-cover"
                  src={item.photo}
                  alt={item.title}
                />
                  <h2 className="mx-8 p-2 text-2xl">{item.title}</h2>
                <div className="p-2">
                  <p className=" p-2 text-gray-400">{item.description}</p>
                  <Link to={`/Blog/${item.id}`}><button className="flex mx-auto mt-2 p-2 border-2 border-black rounded-2xl b button-card-animation">Zobacz</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}