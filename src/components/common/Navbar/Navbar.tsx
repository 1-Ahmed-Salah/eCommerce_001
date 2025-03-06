import { Menu } from "lucide-react"
import Logo from "@assets/logo.svg"
import { useEffect } from "react";
import { Link } from "react-router";
import { HeaderShop, WishList } from "@components/eCommerce";


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
                    <Link to="/">
                        <img 
                            src={Logo}
                            alt="logo" 
                            className="h-8"
                        />
                    </Link>

                    
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
                                    <Link to="/" className="text-gray-300 hover:text-white duration-300 text-sm font-bold">Home</Link>
                                </li>
                                <li>
                                    <Link to="categories" className="text-gray-300 hover:text-white duration-300 text-sm font-bold">Categories</Link>
                                </li>
                                <li>
                                    <Link to="about" className="text-gray-300 hover:text-white duration-300 text-sm font-bold">About</Link>
                                </li>
                                <li>
                                    <Link to="login" className="text-gray-300 hover:text-white duration-300 text-sm font-bold">Login</Link>
                                </li>
                                <li>
                                    <Link to="register" className="text-gray-300 hover:text-white duration-300 text-sm font-bold">Register</Link>
                                </li>
                            </ul>
                        </nav>
                        {/* cart & favourite */}
                        <div className=" h-6 w-[3px] bg-white/20 rounded-full mx-4"/>

                        
                        <div>
                            <div className="flex items-center space-x-8 ">
                                <HeaderShop />
                                <WishList />
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>

        </header>
    )
}

export default Navbar