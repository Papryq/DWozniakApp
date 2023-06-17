import { useState, useEffect } from 'react';
import header1 from './assets/header1.jpg';
import header2 from './assets/header2.jpg';
import header3 from './assets/header3.jpg';

export default function Header() {
  const images = [header1, header2, header3];
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setProgress(100);
    }, 4500);

    const countdown = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 1);
    }, 45);

    return () => {
      clearInterval(changeImage);
      clearInterval(countdown);
    };
  }, [images.length]);

  const ImageIndicators = () => (
    <div className="flex mt-4">
      {images.map((_, index) => (
        <div key={index} className="relative mx-1">
          <div
            className={`w-10 md:w-12 h-2 rounded-lg ${
              index === currentImage ? 'bg-blue-500' : 'bg-white'
            }`}
          >
            {index === currentImage && (
              <div
                className="h-full bg-white rounded-lg"
                style={{ width: `${progress}%` }}
              ></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="overflow-hidden border-b-2 border-opacity-10 border-black flex flex-col items-center justify-center h-screen bg-gray-100">
        <div
          className="relative h-3/4 w-full transition-transform duration-500"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Random"
              className="w-full h-full object-cover absolute top-0 left-0"
              style={{ transform: `translateX(${index * 100}%)`
            }}
            />
          ))}
        </div>
        <div className="absolute bottom-20">
          <ImageIndicators />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 p-4 bg-cyan-400 bg-opacity-50 rounded-xl">
          <h1 className="text-xl md:text-2xl font-bold text-center text-white">Random Image Title</h1>
          <p className="md:max-w-prose text-xs md:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum quam, quisquam, laboriosam possimus
            ratione reprehenderit repellendus veritatis vel voluptates mollitia optio excepturi, rem iusto dolores dolore
            pariatur sapiente illum iste repudiandae!
          </p>
          <div className="flex justify-center">
            <button onClick={() => window.scrollTo(0, 1300)} className="mt-1 p-2 text-xs md:text-md rounded-lg bg-yellow-300 text-white button-header">
              Sprawdz oferte
            </button>
          </div>
        </div>
      </div>
    </>
  );
}