import header1 from './assets/header1.jpg';
import header2 from './assets/header2.jpg';
import header3 from './assets/header3.jpg';



export default function Header() {

  return (
  <>
  <div
  id="carouselExampleControls"
  className="relative"
  data-te-carousel-init
  data-te-carousel-slide>
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
      className="relative float-left -mr-[100%] w-full max-h-screen transition-transform ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src={header1}
        className="block w-full"
        alt="" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full max-h-screen transition-transform ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={header2}
        className="block w-full"
        alt="" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full max-h-screen transition-transform ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={header3}
        className="block w-full"
        alt="" />
    </div>
  </div>
  <button
    className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleControls"
    data-te-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
  </button>
  <button
    className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleControls"
    data-te-slide="next">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
  </button>
  <div className="bg-gray-400 max-w-2/3 max-h-2/3 absolute md:absolute opacity-75 text-white px-4 py-4 m-4 md:py-16 md:rounded-lg top-4 left-4 md:top-48 md:left-48 ">
      <div className='flex flex-col justify-items-center'>
      <h1 className="text-sky-300 md:py-4 text-xl md:text-4xl">Szklane zegary</h1>
      <p className='md:max-w-prose text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum quam, quisquam, laboriosam possimus ratione reprehenderit repellendus veritatis vel voluptates mollitia optio excepturi, rem iusto dolores dolore pariatur sapiente illum iste repudiandae!</p>
      <div className='flex justify-center'>
          <button className='mt-1 p-2 text-xs rounded-lg bg-yellow-300 text-white button-header'>Sprawdz oferte</button>
      </div>
      </div>
  </div>
</div>
  </>
  )
}

  