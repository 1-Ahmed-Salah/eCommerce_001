import { Heart, Menu, ShoppingCart } from "lucide-react"
import Logo from "@assets/logo.svg"
import { useEffect } from "react";

interface INavbarState {
    menuOpen: boolean;
    setMenuOpen: (value:boolean) => void;
}
const Navbar: React.FC<INavbarState> = ({menuOpen, setMenuOpen}) => {

    useEffect(()=> {

        document.body.style.overflow = menuOpen? 'hidden': '';

        return ()=> {
            document.body.style.overflow = '';
        }

    }, [menuOpen])

    return (
        <header className="fixed top-0 w-full z-40  bg-[rgba(10,10,10,0.3)] backdrop-blur-lg border-b border-white/10">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="">
                        <img 
                            src={Logo}
                            alt="logo" 
                            className="h-8"
                        />
                    </a>

                    
                    <div className="flex items-center">

                        <div
                            role="button"
                            aria-label="Toggle Menu"
                            className=" z-40 md:hidden cursor-pointer "
                            onClick={()=> setMenuOpen(true)}
                        >
                            <Menu className="text-gray-300 hover:text-white duration-300" width={22}/>
                        </div>

                        {/* Links */}
                        <nav>
                            <ul className="items-center space-x-8 hidden md:flex">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white duration-300 text-sm font-bold">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white duration-300 text-sm font-bold">Categories</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white duration-300 text-sm font-bold">About</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white duration-300 text-sm font-bold">Login</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white duration-300 text-sm font-bold">Register</a>
                                </li>
                            </ul>
                        </nav>
                        {/* cart & favourite */}
                        <div className=" h-6 w-[3px] bg-white/20 rounded-full mx-4"/>

                        
                        <div>
                            <div className="flex items-center space-x-8 ">
                                <ShoppingCart className="cursor-pointer text-gray-300 hover:text-white duration-300" width={22}/>
                                <Heart className="cursor-pointer text-gray-300 hover:text-white duration-300" width={22}  />
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>

        </header>
    )
}

export default Navbar