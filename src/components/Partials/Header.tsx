'use client'

import Link from 'next/link'
import { FaLocationDot } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsInstagram } from 'react-icons/bs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    return (
        <>
            <header className="w-11/12 lg:w-8/12 relative mx-auto flex mt-4 lg:mt-7 mb-8 lg:mb-10 flex-col">
                <div className="flex w-full h-fit flex-col relative gap-1 lg:gap-2 items-center">
                    <Image
                        alt=""
                        width={500}
                        height={20}
                        src={'/img/logo.png'}
                        className="w-40 lg:w-72 h-fit inline-block"
                        draggable={false}
                    />
                    <span className="font-medium text-xs lg:text-base font-playfair">
                        R E S T A U R A N T
                    </span>
                </div>

                <div className="absolute block lg:hidden right-2 top-1/2 -translate-y-1/2 z-50">
                    <RxHamburgerMenu className="text-2xl cursor-pointer transition-colors duration-300 hover:text-Green" />
                </div>

                <hr className="w-full border-black mt-5 lg:mt-5 lg:mb-5" />

                <nav
                    className={`w-screen lg:w-full h-screen lg:h-fit fixed lg:relative flex justify-center bg-white lg:bg-transparent overflow-hidden lg:overflow-auto z-40 lg:z-0 top-0 left-0 py-14 lg:py-0`}
                >
                    <ul className="flex flex-col gap-6 lg:gap-0 lg:flex-row font-medium w-full lg:w-4/12 lg:justify-between items-center lg:items-start overflow-hidden">
                        <li>
                            <Link
                                className="nav__item"
                                href={pathname == '/' ? '#home' : '/'}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav__item"
                                href={'/about' ? '#about' : '/about'}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav__item"
                                href={'/menu' ? '#menu' : '/menu'}
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav__item"
                                href={'/contact' ? '#contact' : '/contact'}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="right-0 lg:absolute flex gap-5 items-center">
                        <FaLocationDot className="nav__item" />
                        <BsInstagram className="nav__item" />
                    </div>
                </nav>
            </header>
        </>
    )
}
