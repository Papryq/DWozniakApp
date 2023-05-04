import Phone from './assets/phone-call.png';
import AlternateEmailIcon from './assets/mail.png';
import Home from './assets/home.png';
import { Link } from 'react-router-dom';


export default function Footer() {
  

  return (
    <div className="bg-gray-700 mt-16">
        <div className='grid grid-cols-1 md:grid-cols-4 md:mx-64 gap-8 py-8 text-white'>
            <div className='flex flex-col md:items-start items-center rounded-lg pb-4'>
                <h2 className="px-8 py-4 text-2xl">O nas</h2>
                <p className="py-4 px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, inventore cupiditate unde veritatis doloremque magni a possimus. Pariatur minus fugit error accusamus recusandae excepturi, nobis quisquam maiores fugiat, sit qui voluptates consequatur.</p>
            </div>
            <div className='flex flex-col md:items-start items-center rounded-lg pb-4'>
                <h2 className=" py-4 text-2xl">Pomoc</h2>
                <p className="md:py-1">Jak skladac zamowienie?</p>
                <p className="md:py-1">Sposob dostawy</p>
                <p className="md:py-1">Sposoby platnosci</p>
                <p className="md:py-1">Zwroty i reklamacje</p>
                <p className="md:py-1">Polityka prywatnosci</p>
                <p className="md:py-1">Regulamin serwisu</p>
            </div>
            <div className='flex flex-col md:items-start items-center items-center rounded-lg pb-4'>
                <h2 className=" md:py-4 text-2xl">Kontakt</h2>
                <div className='flex my-2' >
                <img className='w-6 h-6 mr-4' src={Phone} alt="" />
                <p className="">259950496</p>
                </div>
                <div className='flex'>
                <img className='w-6 h-6 mr-4' src={AlternateEmailIcon} alt="" />
                <p className="">piq1998p@wp.pl</p>
                </div>
                <Link to="Kontakt" class="bg-cyan-500 p-1 border-2 border-cyan-400 rounded-2xl button-footer mt-4" >Skontaktuj sie z nami</Link> 
            </div>
            <div className='flex flex-col md:items-start items-center rounded-lg pb-4'>
            <h2 className=" md:py-4 text-2xl">Gdzie sie znajdujemy</h2>
            <div className='flex my-2' >
                <img className='w-6 h-6 mr-4 text-white' src={Home} alt="" />
                <p className="">Kochanowskiego 28a/420</p>
                </div>
            </div>
        </div>
    </div>
  )
}