import { FaLocationDot } from 'react-icons/fa6'
import { BsInstagram } from 'react-icons/bs'

export default function Contact() {
    return (
        <>
            <section className="w-full mb-10 text-white px-3 py-16 lg:py-32 selection:text-black flex flex-col gap-4 lg:gap-7 bg-Green text-center">
                <span className="text-2xl lg:text-3xl font-extralight block">
                    Contact Us
                </span>
                <span className="block text-xs lg:text-sm font-light tracking-wider">
                    Grand Boulevard Fine Dining 456 Magnolia Avenue Downtown
                    Metropolis New York, NY 10001 USA.
                </span>
                <span className="block text-sm font-light tracking-widest">
                    (555) 216-1326 | (555) 123-1130
                </span>
                <div className="justify-center gap-6 text-lg lg:text-xl mx-auto w-full flex">
                    <FaLocationDot className="text-white transition-colors hover:text-Green duration-300 cursor-pointer" />
                    <BsInstagram className="text-white transition-colors hover:text-Green duration-300 cursor-pointer" />
                </div>
            </section>
        </>
    )
}
