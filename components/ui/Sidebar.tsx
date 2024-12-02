"use client"

import Image from 'next/image';
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import Button from './ButtonMe';

interface Props {
    // isMenuOpen: boolean;
    // checkMenu: boolean;
}

const Sidebar = ({ }: Props) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return savedTheme || (prefersDarkScheme ? "dark" : "light");
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sidebarRef = useRef<HTMLDivElement>(null);

    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
                document.getElementById('main')?.classList.remove('backdrop-blur-sm');
                setIsTransitioning(true);
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 500);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, setIsMenuOpen]);

    const toggleMenu = () => {
        setIsTransitioning(true);
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            document.getElementById('main')?.classList.remove('backdrop-blur-sm');
            document.getElementById('main')?.classList.add('hidden');
        } else {
            document.getElementById('main')?.classList.remove('hidden');
            document.getElementById('main')?.classList.add('backdrop-blur-sm');
        }
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    }

    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const buttonTextTheme = theme === "dark" ? "Light Mode" : "Dark Mode";
    const buttonTextMenu = isMenuOpen ? "Shrink" : "Expand";
    const logoSrc = theme === "dark" ? "/logo-dark.svg" : "/logo-light.svg";
    const navLink = [
        {
            name: "Home", href: "#home", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${isMenuOpen ? 'mx-2' : isTransitioning ? 'mx-3' : 'mx-auto'}`}>
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
        },
        {
            name: "Projects", href: "#projects", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${isMenuOpen ? 'mx-2' : isTransitioning ? 'mx-3' : 'mx-auto'}`}>
                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>

        },
        {
            name: "Languages", href: "#others", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${isMenuOpen ? 'mx-2' : isTransitioning ? 'mx-3' : 'mx-auto'}`}>
                <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
            </svg>
        },
    ];

    return (
        <>
            <div ref={sidebarRef} className={`top-0 left-0 h-screen py-4 px-0 shadow-md shadow-secondary duration-500 ${isMenuOpen ? 'w-64 pl-3 pr-6' : 'w-16'} fixed bg-background z-50`}>
                <Link href="/" className={`flex mx-auto space-x-3 rtl:space-x-reverse justify-start ${isMenuOpen ? 'mb-4' : ''}`}>
                    <Image
                        src={logoSrc}
                        alt="Logo"
                        width={50}
                        height={50}
                        priority
                        className={`w-12 h-12 ${isMenuOpen ? '' : isTransitioning ? 'mx-2' : 'mx-auto'}`}
                    />
                    <span className={`self-center text-2xl font-semibold  whitespace-nowrap ${isMenuOpen ? '' : 'hidden'}`}>Razzaq <span className='text-accent'>.</span></span>
                </Link>
                <Button class={`flex w-full justify-start px-0 border-b-2 border-secondary mt-3 rounded-none ${isMenuOpen ? 'mr-2' : ''}`} onClicked={handleThemeSwitch}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${isMenuOpen ? '-ml-2' : isTransitioning ? 'ml-1 mt-1' : 'mx-auto mt-1'} ${theme === "dark" ? 'visible' : 'hidden'}`}>
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${isMenuOpen ? '-ml-2' : isTransitioning ? 'mt-1 ml-1' : 'mx-auto mt-1'} ${theme === "dark" ? 'hidden' : ''}`}>
                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                    </svg>
                    <span className={`ml-3 whitespace-nowrap ${!isMenuOpen ? 'hidden' : isTransitioning ? 'fixed pl-6' : 'fixed pl-6'}`}>{buttonTextTheme}</span>
                </Button>
                <ul className="space-y-4">
                    {navLink.map((link) => {
                        return (
                            <li className={`hover:bg-accent hover:text-background rounded-md my-4 flex py-2 ${isMenuOpen ? '' : 'mx-2 '}`} key={link.name}>
                                <Link href={link.href} className="self-center flex w-full" onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}>
                                    {link.svg}
                                    <span className={`ml-3 ${!isMenuOpen ? 'hidden' : isTransitioning ? 'fixed pl-10' : ''}`}>{link.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Button class='flex w-full justify-start mt-4 border-t-2 border-secondary rounded-none' onClicked={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${isMenuOpen ? '-ml-2' : isTransitioning ? 'hidden' : 'mx-auto hidden'}`}>
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${isMenuOpen ? '-ml-2 hidden' : isTransitioning ? 'ml-1' : 'mx-auto'}`}>
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                    </svg>
                    <span className={`ml-3 ${!isMenuOpen ? 'hidden' : isTransitioning ? 'fixed pl-6' : 'fixed pl-6'}`}>{buttonTextMenu}</span>
                </Button>
            </div>
        </>
    )
}

export default Sidebar;