import { useState, useRef, useEffect } from "react";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [active, setActive] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setToggle(false);
            }
        };

        if (toggle) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggle]);

    useEffect(() => {
        const setActiveFromHash = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                const matchingLink = navLinks.find(link => link.id === hash);
                if (matchingLink) {
                    setActive(matchingLink.title);
                }
            } else {
                setActive(""); 
            }
        };
        setActiveFromHash();
    }, []);

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
                <ul className="list-none hidden md:flex gap-10">
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
                
                {/* Social Links */}
                <div className="hidden sm:flex sm:pl-2 items-center gap-4">
                    <a 
                        href="https://www.linkedin.com/in/gauravkumar000701/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-white transition-colors"
                        title="LinkedIn"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a 
                        href="https://github.com/GauravKumar547" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-white transition-colors"
                        title="GitHub"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    <a 
                        href="https://www.scaler.com/academy/profile/22362095afa9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-white transition-colors font-semibold text-sm"
                        title="Scaler Academy"
                    >
                        Scaler
                    </a>
                </div>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={!toggle ? menu : close}
                        alt="menu"
                        className="w-7 h-7 object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        ref={menuRef}
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 bg-tertiary/95 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-2xl shadow-2xl border border-gray-600/20`}>
                        <ul className="list-none flex flex-col justify-end items-start gap-6 w-full">
                            {navLinks.map((link, index) => (
                                <li
                                    key={"link" + link.id}
                                    className={`${
                                        active === link.title ? "text-white" : "text-secondary"
                                    } font-poppins hover:text-white text-base font-medium cursor-pointer w-full transition-all duration-300 hover:translate-x-2`}
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(!toggle);
                                    }}
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <a 
                                        href={`#${link.id}`}
                                        className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 transition-all duration-300"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                            
                            {/* Mobile Social Links */}
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gradient-to-r from-purple-500/30 to-blue-500/30 w-full">
                                <p className="text-xs text-gray-400 font-medium mb-2">Connect with me</p>
                                <div className="flex flex-row gap-4 justify-start">
                                    <a 
                                        href="https://www.linkedin.com/in/gauravkumar000701/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-secondary hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-500/10"
                                        title="LinkedIn"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href="https://github.com/GauravKumar547" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-secondary hover:text-purple-400 transition-colors duration-300 p-2 rounded-lg hover:bg-purple-500/10"
                                        title="GitHub"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href="https://www.scaler.com/academy/profile/22362095afa9" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-secondary hover:text-orange-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-orange-500/10 text-xs font-semibold"
                                        title="Scaler Academy"
                                    >
                                        Scaler
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
