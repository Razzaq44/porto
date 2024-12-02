"use client"

import local from "next/font/local";
import { ReactNode, useEffect, useState } from "react"
import Button from "./ButtonMe";
import Image from 'next/image';
import Link from "next/link";

const NavBar = () => {
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const buttonText = theme === "dark" ? "Light Mode" : "Dark Mode";
    const logoSrc = theme == "dark" ? "/logo-dark.svg" : "/logo-light.svg"
    const navLink = [
        {
            name: "Home", href: "/",
        },
        {
            name: "About", href: "/about",
        },
        {
            name: "Project", href: "/project",
        },
    ]

    return (
        <>
            <nav className="bg-background md:mt-2 mt-4 lg:mt-1">
                <div className="flex flex-wrap items-center justify-between mx-auto me-2 px-2 mt-2 md:px-8 md:mt-0">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image
                            src={logoSrc}
                            alt="Logo"
                            width={50}
                            height={50}
                            priority
                            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Razzaq</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Button class="border border-foreground" onClicked={handleThemeSwitch}>{buttonText}</Button>
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row">
                            {navLink.map((link) => {
                                return (
                                    <li className={``} key={link.name}>
                                        <Link href={link.href} className="block py-2 px-3 hover:bg-accent rounded-2xl hover:text-background">
                                            <span className={``}>{link.name}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default NavBar