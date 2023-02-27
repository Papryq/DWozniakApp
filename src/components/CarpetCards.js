import Minion from './assets/minion.png';
import LeftArrow from './assets/left-arrow.png';
import RightArrow from './assets/right-arrow.png';

const cards = [
    {
        id: 0,
        title: 'Minionek1',
        text: 'minionek jest bardzo zly i nie lubi ludzi'
    },
    {
        id: 1,
        title: 'Minionek2',
        text: 'minionek jest bardzo zly i nie lubi ludzi'
    },
    {
        id: 2,
        title: 'Minionek3',
        text: 'minionek jest bardzo zly i nie lubi ludzi'
    },
    {
        id: 3,
        title: 'Minionek4',
        text: 'minionek jest bardzo zly i nie lubi ludzi'
    }
]


export default function CarpetCards() {
  return (
    <>
        <div className='flex justify-start pt-16'>
            <h1 className='text-4xl ml-12 md:ml-80 py-2'>Zegary</h1>
            <div className='md:flex md:flex-row'>
                    <button
                    ><img className='px-4' src={LeftArrow} /></button>
                    <button
                    ><img src={RightArrow} alt="" /></button>
                </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 md:mx-64 gap-8 py-8'>
            {cards.map(card => 
               (
                <div className="card-classes" key={card.id}>
                    <img className="max-w-sm max-h-sm bg-white" src={Minion} alt="Minion" />
                    <h2 className="mx-auto p-2 text-3xl" >{card.title}</h2>
                    <p className="mx-8 p-4 text-gray-400" >{card.text}</p>
                    <button className="button-card-animation border-2 border-gray-700 mx-auto rounded-xl px-6 py-2">Zobacz</button>
                </div>
               ) 
            )}
        </div>
    </>
  )
}
