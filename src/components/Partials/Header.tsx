'use client'

import Link from 'next/link'
import { FaLocationDot } from 'react-icons/fa6'
import { BiX } from 'react-icons/bi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsInstagram } from 'react-icons/bs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
    const pathname = usePathname()
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    function handleNavOpen() {
        setIsNavOpen((value) => !value)
    }

    useEffect(() => {
        if (isNavOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isNavOpen, pathname])

    useEffect(() => {
        setIsNavOpen(false)
    }, [pathname])

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
                    {isNavOpen ? (
                        <BiX
                            onClick={handleNavOpen}
                            className="text-3xl cursor-pointer transition-colors duration-300 hover:text-Green"
                        />
                    ) : (
                        <RxHamburgerMenu
                            onClick={handleNavOpen}
                            className="text-2xl cursor-pointer transition-colors duration-300 hover:text-Green"
                        />
                    )}
                </div>

                <hr className="w-full border-black mt-5 lg:mt-5 lg:mb-5" />

                <nav
                    className={`w-screen h-screen gap-10 lg:gap-0 lg:w-full lg:h-fit fixed lg:relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-center bg-white lg:bg-transparent z-40 lg:scale-100 lg:opacity-100 lg:z-0 inset-0 py-28 lg:py-0 transition-all duration-300 ${
                        isNavOpen
                            ? 'scale-100 opacity-100'
                            : 'scale-0 opacity-0'
                    }`}
                >
                    <ul
                        className={`flex flex-col gap-9 lg:gap-0 lg:flex lg:flex-row font-medium w-full lg:w-4/12 lg:justify-between items-center lg:items-start ${
                            isNavOpen ? 'flex' : 'hidden'
                        }`}
                    >
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
                                href={
                                    pathname == '/about' ? '#about' : '/about'
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav__item"
                                href={pathname == '/menu' ? '#menu' : '/menu'}
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="nav__item"
                                href={
                                    pathname == '/contact'
                                        ? '#contact'
                                        : '/contact'
                                }
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div
                        className={`right-0 lg:absolute flex lg:flex gap-7 lg:gap-5 items-center ${
                            isNavOpen ? 'flex' : 'hidden'
                        }`}
                    >
                        <FaLocationDot className="nav__icon" />
                        <BsInstagram className="nav__icon" />
                    </div>
                </nav>
            </header>
        </>
    )
}
