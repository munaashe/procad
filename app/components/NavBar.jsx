'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from '@/app/assets/logo.png';
import menu from '@/app/assets/menu.svg';
import close from '@/app/assets/close.svg';

function NavBar() {
    const pathname = usePathname();
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full fixed top-0 left-0 right-0 z-10 shadow-md shadow-bottom shadow-[#24335330] max-h-[100vh] md:max-h-16 bg-white">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-start justify-between py-3 md:py-5 md:block">
                            {/* LOGO */}
                            <Link href="/">
                                < Image
                                    src={logo}
                                    alt='Procad Construction'
                                    width={120}
                                    height={60}
                                />
                            </Link>
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src={close} width={30} height={30} alt="logo" />
                                    ) : (
                                        <Image
                                            src={menu}
                                            width={30}
                                            height={30}
                                            alt="logo"
                                            className="focus:border-none active:border-none"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className={`pb-6 text-xl font-semibold py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-[#243353] md:hover:text-[#e29b64] md:hover:bg-transparent ${pathname === '/' ? 'text-[#e29b64]' : 'text-[#243353]'}`}>
                                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className={`pb-6 text-xl font-semibold py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-[#243353] md:hover:text-[#e29b64] md:hover:bg-transparent ${pathname === '/about' ? 'text-[#e29b64]' : 'text-[#243353]'}`}>
                                    <Link href="/about" onClick={() => setNavbar(!navbar)}>
                                        About
                                    </Link>
                                </li>
                                <li className={`pb-6 text-xl font-semibold py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-[#243353] md:hover:text-[#e29b64] md:hover:bg-transparent ${pathname === '/portfolio' ? 'text-[#e29b64]' : 'text-[#243353]'}`}>
                                    <Link href="/portfolio" onClick={() => setNavbar(!navbar)}>
                                        Portfolio
                                    </Link>
                                </li>
                                <li className={`pb-6 text-xl font-semibold py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-[#243353]  md:hover:text-[#e29b64] md:hover:bg-transparent ${pathname === '/contact' ? 'text-[#e29b64]' : 'text-[#243353]'}`}>
                                    <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;