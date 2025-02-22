import { X } from "lucide-react"

interface IMobileMenuState {
    menuOpen: boolean;
    setMenuOpen: (value:boolean) => void;
}

const MobileMenu: React.FC<IMobileMenuState> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] px-4 duration-300 ease-in-out ${menuOpen? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}  `}>
        <div
            role="button"
            aria-label="Close button"
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            onClick={()=> setMenuOpen(false)}
        >
            <X />
        </div>

        <nav className="pt-14">
            <ul className="">
                <li>
                    <a 
                        href="#" 
                        className="text-gray-300 hover:text-white hover:bg-zinc-500/10 py-2 px-3 rounded duration-300  font-bold block hover:translate-x-2"
                        onClick={()=> setMenuOpen(false)}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        className="text-gray-300 hover:text-white hover:bg-zinc-500/10 py-2 px-3 rounded duration-300  font-bold block hover:translate-x-2"
                        onClick={()=> setMenuOpen(false)}
                    >
                        Categories
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        className="text-gray-300 hover:text-white hover:bg-zinc-500/10 py-2 px-3 rounded duration-300  font-bold block hover:translate-x-2"
                        onClick={()=> setMenuOpen(false)}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        className="text-gray-300 hover:text-white hover:bg-zinc-500/10 py-2 px-3 rounded duration-300  font-bold block hover:translate-x-2"
                        onClick={()=> setMenuOpen(false)}
                    >
                        Login
                    </a>
                </li>
                 <li>
                    <a 
                        href="#" 
                        className="text-gray-300 hover:text-white hover:bg-zinc-500/10 py-2 px-3 rounded duration-300  font-bold block hover:translate-x-2"
                        onClick={()=> setMenuOpen(false)}
                    >
                            Register
                    </a>
                </li>
               </ul>
        </nav>

    </div>
  )
}

export default MobileMenu