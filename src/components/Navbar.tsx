import { useState } from "react";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [active, setActive] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flex box-border max-w-[100vw] items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt="logo" className="w-9 h-9 object-cover rounded-full" />
                    <p className="text-white text-lg font-bold cursor-pointer">Gaurav Kumar</p>
                </Link>
                <ul className="list-none hidden sm:flex gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={"link" + link.id}
                            className={`${
                                active === link.title ? "text-white" : "text-secondary"
                            } hover:text-white text-lg font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={!toggle ? menu : close}
                        alt="menu"
                        className="w-7 h-7 object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex flex-col justify-end items-start gap-10">
                            {navLinks.map((link) => (
                                <li
                                    key={"link" + link.id}
                                    className={`${
                                        active === link.title ? "text-white" : "text-secondary"
                                    } font-poppins hover:text-white text-base font-medium cursor-pointer`}
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(!toggle);
                                    }}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
