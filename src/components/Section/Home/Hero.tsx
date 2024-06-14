import Image from 'next/image'

export default function Hero() {
    return (
        <>
            <section
                id="home"
                className="w-10/12 h-auto text-white mx-auto mb-20 relative flex"
            >
                <div className="w-full h-screen bg-black/[.35] z-0 absolute"></div>
                <div></div>
                <Image
                    src={'/img/f.jpg'}
                    alt=""
                    fill
                    quality={100}
                    className="absolute left-0 top-0 w-full h-fit"
                />
                <div className="w-4/12 py-28 pl-20 h-screen z-10 bg-Green/[.85] selection:bg-black/0">
                    <span className="block text-4xl leading-snug tracking-widest whitespace-nowrap">
                        Experience <br /> The Taste Of Italy
                    </span>
                </div>
            </section>
        </>
    )
}
