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
      className="relative float-left -mr-[100%] w-full max-h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src={header1}
        className="block w-full"
        alt="Wild Landscape" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full max-h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={header2}
        className="block w-full"
        alt="Camera" />
    </div>
    <div
      className="relative float-left -mr-[100%] hidden w-full max-h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={header3}
        className="block w-full"
        alt="Exotic Fruits" />
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
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
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
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>
        <div className="bg-gray-400 md:absolute opacity-75 text-white px-12 py-16 md:rounded-lg md:top-48 md:left-48 ">
            <div className='flex flex-col justify-items-center'>
            <h1 className="text-sky-300 py-4 text-4xl">Szklane zegary</h1>
            <p className='md:max-w-prose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci temporibus saepe aperiam ipsa architecto accusamus quas earum obcaecati. Distinctio, laborum! Nulla in vitae neque, recusandae molestias excepturi nostrum ad quaerat impedit!</p>
            <div className='flex justify-center'>
                <button className='mt-4 p-2 rounded-lg bg-yellow-300 text-white button-header'>Sprawdz oferte</button>
            </div>
            </div>
        </div>
  </>
  )
}

  