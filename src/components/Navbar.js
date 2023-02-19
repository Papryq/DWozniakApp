
export default function Navbar() {
  return (
    <>
        <nav class="bg-zinc-200 px-2 sm:px-4 py-1">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DW</span>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                    <a href="#" class="categories-nav button-transition ">Home</a>
                    </li>
                    <li>
                    <a href="#" class="categories-nav button-transition ">Kontakt</a>
                    </li>
                    <li>
                    <a href="#" class="categories-nav button-transition ">O nas</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
