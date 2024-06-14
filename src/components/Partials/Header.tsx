'use client'

import Link from 'next/link'
import { FaLocationDot } from 'react-icons/fa6'
import { BsInstagram } from 'react-icons/bs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()
    const pathToHome = pathname == '/' ? '#home' : '/'

    const pathToAbout = pathname == '/about' ? '#about' : '/about'

    const pathToMenu = pathname == '/menu' ? '#menu' : '/menu'

    const pathToContact = pathname == '/contact' ? '#contact' : '/contact'

    return (
        <>
            <header className="w-8/12 relative mx-auto flex mt-2 lg:mt-7 mb-10 flex-col">
                <div className="flex w-full h-fit flex-col relative gap-2 items-center">
                    <Image
                        alt=""
                        width={300}
                        height={20}
                        src={'/img/logo.png'}
                        className="w-20 lg:w-72 h-fit inline-block"
                        draggable={false}
                    />
                    <span className="font-medium text-xs lg:text-base font-playfair">
                        R E S T A U R A N T
                    </span>
                </div>

                <hr className="w-full border-black my-5" />

                <nav className="w-full relative hidden lg:flex justify-center">
                    <ul className="flex font-medium w-4/12 justify-between">
                        <li>
                            <Link className="nav__item" href={pathToHome}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav__item" href={pathToAbout}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="nav__item" href={pathToMenu}>
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link className="nav__item" href={pathToContact}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="right-0 absolute flex gap-5 items-center">
                        <FaLocationDot className="nav__item" />
                        <BsInstagram className="nav__item" />
                    </div>
                </nav>
            </header>
        </>
    )
}
