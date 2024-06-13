import Link from "next/link";
import img from "/logo/logo.png";
// import { FaLocationDot } from "react-icons/fa6";
// import { BsInstagram } from "react-icons/bs";
import Image from "next/image";

export default function Header() {
  const pathToHome = window.location.pathname == "/" ? "#home" : "/";

  const pathToAbout =
    window.location.pathname == "/about" ? "#about" : "/about";

  const pathToMenu = window.location.pathname == "/menu" ? "#menu" : "/menu";

  const pathToContact =
    window.location.pathname == "/contact" ? "#contact" : "/contact";

  return (
    <>
      <header className="w-8/12 mx-auto flex mt-7 mb-10 flex-col">
        <div className="flex flex-col gap-2 items-center">
          <Image alt="" fill={true} src={img} className="w-72" />
          <span className="font-medium font-playfair">R E S T A U R A N T</span>
        </div>

        <hr className="w-full border-black my-5" />

        <nav className="w-full relative flex justify-center">
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
            {/* <FaLocationDot className="nav__item" />
            <BsInstagram className="nav__item" /> */}
          </div>
        </nav>
      </header>
    </>
  );
}
