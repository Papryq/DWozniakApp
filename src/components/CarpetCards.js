import Minion from './assets/minion.png'

export default function CarpetCards() {
  return (
    <>
        <div className='flex justify-start pt-16'>
            <h1 className='text-6xl ml-12 md:ml-80 py-4'>Zegary</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 md:mx-64 gap-8 py-8'>
            <div className='flex flex-col bg-gray-100 rounded-lg border-gray-100 border-8 pb-4'>
                <img src={Minion} alt="" className="max-w-sm max-h-sm bg-white"/>
                <h2 className="mx-auto p-2 text-3xl">Minionek</h2>
                <p className="mx-8 p-4 text-gray-400">minionek jest bardzo zly i nie lubi ludzi</p>
                <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
            </div>
            <div className='flex flex-col bg-gray-100 rounded-lg border-gray-100 border-8 pb-4'>
                <img src={Minion} alt="" className="max-w-sm max-h-sm bg-white"/>
                <h2 className="mx-auto p-2 text-3xl">Minionek</h2>
                <p className="mx-8 p-4 text-gray-400">minionek jest bardzo zly i nie lubi ludzi</p>
                <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
            </div>
            <div className='flex flex-col bg-gray-100 rounded-lg border-gray-100 border-8 pb-4'>
                <img src={Minion} alt="" className="max-w-sm max-h-sm bg-white"/>
                <h2 className="mx-auto p-2 text-3xl">Minionek</h2>
                <p className="mx-8 p-4 text-gray-400">minionek jest bardzo zly i nie lubi ludzi</p>
                <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
            </div>
            <div className='flex flex-col bg-gray-100 rounded-lg border-gray-100 border-8 pb-4'>
                <img src={Minion} alt="" className="max-w-sm max-h-sm bg-white"/>
                <h2 className="mx-auto p-2 text-3xl">Minionek</h2>
                <p className="mx-8 p-4 text-gray-400">minionek jest bardzo zly i nie lubi ludzi</p>
                <button className="border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
            </div>
        </div>
    </>
  )
}
