import { MobileMenu, Navbar } from "@components/common";
import { useState } from "react"
import { Outlet } from "react-router";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Toaster
                 position="top-right"
                 toastOptions={{
                    className: 'text-[14px] font-medium tracking-wide',
                    style: {
                        backgroundColor: '#27272a',
                        color: '#fff'
                    }
                 }}
            />
            <Outlet />
        </div>
    )
}

export default MainLayout