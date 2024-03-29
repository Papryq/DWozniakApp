import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
        <nav className="bg-zinc-300 px-2 sm:px-4 py-1">
            <div className="md:container flex flex-wrap md:items-center md:justify-between md:mx-auto">
                    <Link to="/" className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DW</Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                    <Link  to="Kontakt" className="categories-nav  button-transition" >Kontakt</Link> 
                    </li>
                    <li>
                    <button onClick={() => window.scrollTo(0, 9999)} className="categories-nav button-transition">O nas</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
