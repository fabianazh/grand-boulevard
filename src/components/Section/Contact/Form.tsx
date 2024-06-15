import Image from 'next/image'

export default function Form() {
    return (
        <>
            <section
                id="contact"
                className="w-full flex flex-col-reverse lg:flex-row"
            >
                <div className="w-full lg:w-1/2 shrink-0 flex flex-col justify-center px-5 lg:px-32 text-center py-10 lg:py-20">
                    <span className="text-2xl lg:text-4xl mb-4 lg:mb-7 tracking-tight lg:font-light block">
                        GIVE US YOUR FEEDBACK
                    </span>
                    <form action="" className="">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" />
                        <textarea
                            placeholder="How can we improve?"
                            className="w-full border resize-none border-b-black border-white px-3 mb-8 text-sm py-3 placeholder:text-black hover:border hover:border-black focus:border-black focus:border focus:outline-none h-32 lg:h-40 max-h-40"
                        ></textarea>
                        <button className="bg-black text-white/90 hover:bg-black/80 transition-colors duration-300 text-xl px-20 py-3">
                            Send
                        </button>
                    </form>
                </div>
                <div className="w-full h-56 lg:h-full lg:w-1/2 shrink-0 overflow-hidden relative">
                    <Image
                        width={900}
                        height={100}
                        src={'/img/contact.jpg'}
                        alt=""
                        className="w-full object-contain shrink-0 top-1/2 lg:top-0 -translate-y-1/2 lg:-translate-y-0 absolute lg:relative"
                    />
                </div>
            </section>
        </>
    )
}
