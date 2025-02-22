import { MobileMenu, Navbar } from "@components/common";
import { useState } from "react"
import { Outlet } from "react-router";


const MainLayout = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Outlet />
        </div>
    )
}

export default MainLayout