import React from 'react'
import randomImage from '../components/assets/random.jpg';



export default function 
() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative h-3/4 w-full">
        <img src={randomImage} alt="Random" className="w-full h-full object-cover" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-center text-white border-2 p-4 bg-cyan-400 bg-opacity-50 rounded-xl">
          Random Image Title
        </h1>
      </div>
    </div>
    <div className='px-4'>
        <div className='md:px-[32rem] py-8'>
          <h1 className='text-2xl'>Paragraph 1</h1>
          <p className='text-lg py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis suscipit cupiditate eos omnis harum. Maiores unde, magni cum corporis ad dolore ipsum sed sit rem at odio earum enim, tempore, possimus similique.</p>
        </div>
        <div className='md:px-[32rem] '>
          <h1 className='text-2xl'>Paragraph 1</h1>
          <p className='text-lg py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis suscipit cupiditate eos omnis harum. Maiores unde, magni cum corporis ad dolore ipsum sed sit rem at odio earum enim, tempore, possimus similique.</p>
        </div>
        <div className='md:px-[32rem] py-8'>
          <h1 className='text-2xl'>Paragraph 1</h1>
          <p className='text-lg py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis suscipit cupiditate eos omnis harum. Maiores unde, magni cum corporis ad dolore ipsum sed sit rem at odio earum enim, tempore, possimus similique.</p>
        </div>
      </div>
    </>
  )
}
