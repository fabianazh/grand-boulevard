import { FaLocationDot } from 'react-icons/fa6'
import { BsInstagram } from 'react-icons/bs'
import Image from 'next/image'

export default function Contact() {
    return (
        <>
            <section
                id="contact"
                className="w-full mb-10 grid-cols-2 grid-flow-row grid"
            >
                <div className="w-full flex flex-col justify-center px-32 text-center py-20">
                    <span className="text-4xl mb-7 tracking-tight font-light block leading-relaxed">
                        GIVE US YOUR FEEDBACK
                    </span>
                    <form action="" className="">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" />
                        <textarea
                            placeholder="How can we improve?"
                            className="w-full border border-b-black border-white px-3 mb-8 text-sm py-3 placeholder:text-black hover:border hover:border-black focus:border-black focus:border focus:outline-none h-40 max-h-40"
                        ></textarea>
                        <button className="bg-black text-white/90 hover:bg-black/80 transition-colors duration-300 text-xl px-20 py-3">
                            Send
                        </button>
                    </form>
                </div>
                <Image
                    fill={true}
                    src={'/img/contact.jpg'}
                    alt=""
                    className="w-full"
                />
                <div className="w-full text-white py-32 selection:text-black col-span-2 bg-Green text-center">
                    <span className="text-3xl font-extralight block mb-8">
                        Contact Us
                    </span>
                    <span className="block text-sm mb-7 font-light tracking-wider">
                        Grand Boulevard Fine Dining 456 Magnolia Avenue Downtown
                        Metropolis New York, NY 10001 USA.
                    </span>
                    <span className="block text-sm mb-8 font-light tracking-widest">
                        (555) 216-1326 | (555) 123-1130
                    </span>
                    <div className="text-white justify-center gap-6 text-xl mx-auto w-full flex">
                        <FaLocationDot />
                        <BsInstagram />
                    </div>
                </div>
            </section>
        </>
    )
}
