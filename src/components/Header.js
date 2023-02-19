import clock from './assets/headerClock.jpg'

export default function Header() {
  return (
  <>
    <div className="md:relative "> 
        <img className="mx-auto md:rounded md:flex" src={clock} alt="image" />
        <div className="bg-gray-400 md:absolute opacity-75 text-white px-16 py-20 md:rounded-lg md:top-32 md:left-96 ">
            <div className='flex flex-col justify-items-center'>
            <h1 className="text-sky-300 py-4 text-4xl">Szklane zegary</h1>
            <p className='max-w-prose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci temporibus saepe aperiam ipsa architecto accusamus quas earum obcaecati. Distinctio, laborum! Nulla in vitae neque, recusandae molestias excepturi nostrum ad quaerat impedit!</p>
            <div className='flex justify-center'>
                <button className='mt-4 p-2 rounded-lg bg-white text-black button-header'>Sprawdz oferte</button>
            </div>
            </div>
        </div>
    </div>

  </>
  )
}
