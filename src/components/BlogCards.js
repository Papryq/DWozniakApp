import BlogPhoto1 from './assets/blog1.jpg';
import BlogPhoto2 from './assets/blog2.jpg';
import BlogPhoto3 from './assets/blog3.jpg';

export default function BlogCards() {
  return (
    <>
        <div className='flex justify-center pt-16'>
            <h1 className='text-6xl py-4 '>Blog</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 md:mx-64 gap-8 py-8'>
            <div className='flex flex-col shadow-2xl rounded-lg border-white border-8 pb-4'>
                <img src={BlogPhoto1} alt="" className="max-w-sm max-h-md bg-white"/>
                <h2 className="mx-8 p-2 text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet debitis magni.</h2>
                <p className="mx-8 p-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur voluptates ipsam maiores molestiae, illum voluptas, repellat dignissimos eius mollitia consequuntur voluptatum praesentium odit optio unde, accusamus id ullam cumque aperiam aspernatur?</p>
            </div>
            <div className='flex flex-col shadow-2xl rounded-lg border-white border-8 pb-4'>
                <img src={BlogPhoto2} alt="" className="max-w-sm max-h-md bg-white"/>
                <h2 className="mx-auto p-2 text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet debitis magni.</h2>
                <p className="mx-8 p-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur voluptates ipsam maiores molestiae, illum voluptas, repellat dignissimos eius mollitia consequuntur voluptatum praesentium odit optio unde, accusamus id ullam cumque aperiam aspernatur?</p>
                <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
            </div>
            <div className='flex flex-col shadow-2xl rounded-lg border-white border-8 pb-4'>
                <img src={BlogPhoto3} alt="" className="max-w-sm max-h-md bg-white"/>
                <h2 className="mx-auto p-2 text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet debitis magni.</h2>
                <p className="mx-8 p-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur voluptates ipsam maiores molestiae, illum voluptas, repellat dignissimos eius mollitia consequuntur voluptatum praesentium odit optio unde, accusamus id ullam cumque aperiam aspernatur?</p>
                <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
            </div>
        </div>
    </>
  )
}
