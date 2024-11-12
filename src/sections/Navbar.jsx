import { useState } from 'react';
import { navLinks } from './../constant/index';

const NavItems = () => {
  return (
    <div className="">
      <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-[29px] relative z-20">
        {navLinks.map(({ name, id, href }) => (
          <li key={id} className="hover:text-gray-800 transition-all duration-200 max-sm:hover:bg-gray-400 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5 text-center">
            <a href={href} className="text-base transition-colors" onClick={() => { }}>{name}</a>
          </li>
        ))}

        <button className="bg-[#2AB691]/10 px-3 py-[11px] rounded-[10px] hover:bg-[#2AB691]/20 transition-colors duration-200 text-[#2AB691] text-base font-[500]">Sign Up</button>
      </ul>
    </div>
  )
}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mx-auto">
          <a href="/">
            <img src="assets/logo.png" alt="logo" className="object-contain max-w-40 cursor-pointer" />
          </a>

          <button onClick={toggleMenu} className="sm:hidden" aria-label="Toggle Menu">
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="size-8 text-black" />
          </button>

          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      <div onClick={toggleMenu} className={`absolute left-0 right-0 bg-gray-200 backdrop-blur-sm transition-all duration-300 overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-4">
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar