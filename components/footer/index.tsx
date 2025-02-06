import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/assets/logo.png';

// Type Definitions
interface FooterLink {
    title: string;
    href: string;
}

const services: FooterLink[] = [
    { title: 'Construction Works', href: '#' },
    { title: 'Renovations', href: '#' },
    { title: 'Civils', href: '#' },
    { title: 'Consultancy Works', href: '#' },
];

const companyLinks: FooterLink[] = [
    { title: 'Home', href: '/' },
    { title: 'About us', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact Us', href: '/contact' },
];

const socialLinks = [
    { href: 'https://twitter.com/procad_eng', label: 'Twitter', icon: 'M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z' },
    { href: 'https://www.facebook.com/BlueDiamondEngineering/', label: 'Facebook', icon: 'M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z' }
];

const FooterSection: React.FC<{ title: string; links: FooterLink[] }> = ({ title, links }) => (
    <div>
        <h6 className='text-gray-800 font-medium mb-2'>{title}</h6>
        <ul className='text-sm'>
            {links.map((link) => (
                <li key={link.title} className='mb-2'>
                    <Link href={link.href} className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Footer: React.FC = () => {
    return (
        <footer className='w-full mx-auto px-4 sm:px-6 border-t border-gray-200 py-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4'>
                <div className='mb-2 flex items-center justify-center sm:justify-start'>
                    <Link href='/' aria-label='Home'>
                        <Image src={Logo} alt='Procad Construction' height={120} width={240} className='h-20 hover:opacity-80' />
                    </Link>
                </div>
                <FooterSection title='Services' links={services} />
                <FooterSection title='Company' links={companyLinks} />
                <div>
                    <h6 className='text-gray-800 font-medium mb-2'>Subscribe</h6>
                    <p className='text-sm text-gray-600 mb-4'>Get the latest news and articles to your inbox every month.</p>
                    <form>
                        <div className='relative flex items-center max-w-xs'>
                            <input type='email' className='form-input w-full px-3 py-2 text-sm' placeholder='Your email' required />
                            <button type='submit' className='absolute inset-0 left-auto' aria-label='Subscribe'>
                                <svg className='w-3 h-3 fill-current text-blue-600 mx-3' viewBox='0 0 12 12'>
                                    <path d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707z' fillRule='nonzero' />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex items-center justify-between py-4 border-t border-gray-200'>
                <ul className='flex mb-4 sm:ml-4 sm:mb-0 justify-center'>
                    {socialLinks.map((social, index) => (
                        <li key={index}>
                            <Link href={social.href} aria-label={social.label} className='flex justify-center items-center text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>
                                <svg className='w-8 h-8 fill-current' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                                    <path d={social.icon} />
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='text-sm text-gray-600 text-center'>
                    <a className='text-blue-600 hover:underline' href='https://munashe.co.zw/' target='_blank' rel='noopener noreferrer'>SiDesigned</a> © {new Date().getFullYear()} Procad Construction. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;