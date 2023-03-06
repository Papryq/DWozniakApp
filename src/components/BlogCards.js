import { useState } from 'react';

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
            <h1 className='text-5xl'>Blog</h1>
        </div>
        <div className='flex md:mx-24 items-center justify-center'>
        {items.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className={`p-4 md:m-4 md:blog-animation flex flex-col shadow-xl border-white border-8' ${
                index === currentIndex ? "" : "hidden sm:block"
              }`}
            >
              <div className="bg-white shadow-2xl md:shadow-none rounded-lg">
                <img
                  className="w-full h-48 object-cover"
                  src={item.photo}
                  alt={item.title}
                />
                  <h2 className="mx-8 p-2 text-2xl">{item.title}</h2>
                <div className="p-2">
                  <p className=" p-2 text-gray-400">{item.description}</p>
                  <button className="flex mx-auto mt-2 p-2 border-2 border-black rounded-2xl b button-card-animation">Zobacz</button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

            // <div className='blog-animation flex flex-col shadow-2xl rounded-lg border-white border-8 pb-4'>
            //     <img src={BlogPhoto1} alt="" className="max-w-sm max-h-md bg-white"/>
            //     <h2 className="mx-8 p-2 text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet debitis magni.</h2>
            //     <p className="mx-8 p-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur voluptates ipsam maiores molestiae, illum voluptas, repellat dignissimos eius mollitia consequuntur voluptatum praesentium odit optio unde, accusamus id ullam cumque aperiam aspernatur?</p>
            // </div>
            // <div className='blog-animation flex flex-col shadow-2xl rounded-lg border-white border-8 pb-4'>
            //     <img src={BlogPhoto2} alt="" className="max-w-sm max-h-md bg-white"/>
            //     <h2 className="mx-auto p-2 text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet debitis magni.</h2>
            //     <p className="mx-8 p-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur voluptates ipsam maiores molestiae, illum voluptas, repellat dignissimos eius mollitia consequuntur voluptatum praesentium odit optio unde, accusamus id ullam cumque aperiam aspernatur?</p>
            //     <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
            // </div>
            // <div className='blog-animation flex flex-col shadow-2xl rounded-lg border-white border-8 pb-4'>
            //     <img src={BlogPhoto3} alt="" className="max-w-sm max-h-md bg-white"/>
            //     <h2 className="mx-auto p-2 text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet debitis magni.</h2>
            //     <p className="mx-8 p-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur voluptates ipsam maiores molestiae, illum voluptas, repellat dignissimos eius mollitia consequuntur voluptatum praesentium odit optio unde, accusamus id ullam cumque aperiam aspernatur?</p>
            //     <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
            // </div>