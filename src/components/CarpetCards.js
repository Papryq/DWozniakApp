import Minion from './assets/minion.png';
import LeftArrow from './assets/left-arrow.png';
import RightArrow from './assets/right-arrow.png';

export default function CarpetCards() {
  return (
    <>
        <div
        id="carouselCardsControls"
        data-te-carousel-init>
            <div className='flex justify-between mx-2 md:justify-start pt-8'>
                <h1 className='text-4xl md:ml-12 md:ml-80 py-2'>Zegary</h1>
                <div className='md:flex md:flex-row'>
                    <button
                    data-te-target="#carouselCardsControls"
                    data-te-slide="prev"
                    ><img className='px-4' src={LeftArrow} /></button>
                    <button
                    data-te-target="#carouselCardsControls"
                    data-te-slide="next"
                    ><img src={RightArrow} alt="" /></button>
                </div>
            </div>
            <div className='grid md:grid-cols-4 md:mx-64 gap-8 py-8'>
                <div 
                className='md:card-classes'
                data-te-carousel-item
                data-te-carousel-active
                >
                    <img src={Minion} alt="" className="max-w-sm max-h-sm bg-white"/>
                    <h2 className="mx-auto p-2 text-3xl">Minionek1</h2>
                    <p className="mx-8 p-4 text-gray-400">minionek jest bardzo zly i nie lubi ludzi</p>
                    <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
                </div>
                <div
                className='md:card-classes hidden'
                data-te-carousel-item
                >
                    <img src={Minion} alt="" className="max-w-sm max-h-sm bg-white"/>
                    <h2 className="mx-auto p-2 text-3xl">Minionek2</h2>
                    <p className="mx-8 p-4 text-gray-400">minionek jest bardzo zly i nie lubi ludzi</p>
                    <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
                </div>
                <div 
                className='md:card-classes hidden'
                data-te-carousel-item
                >
                    <img src={Minion} alt="" className="max-w-sm max-h-sm bg-white"/>
                    <h2 className="mx-auto p-2 text-3xl">Minionek3</h2>
                    <p className="mx-8 p-4 text-gray-400">minionek jest bardzo zly i nie lubi ludzi</p>
                    <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
                </div>
                <div
                className='md:card-classes hidden'
                data-te-carousel-item
                >
                    <img src={Minion} alt="" className="max-w-sm max-h-sm bg-white"/>
                    <h2 className="mx-auto p-2 text-3xl">Minionek4</h2>
                    <p className="mx-8 p-4 text-gray-400">minionek jest bardzo zly i nie lubi ludzi</p>
                    <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
                </div>
            </div>
        </div>
    </>
  )
}
