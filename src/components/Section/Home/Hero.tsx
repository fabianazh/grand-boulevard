import { montserrat } from '@/app/fonts'
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
                <div className="w-6/12 py-28 pl-20 pr-10 h-screen z-10 bg-Green selection:bg-black/0 flex flex-col gap-5">
                    <span
                        className={`block text-7xl leading-tight ${montserrat.className}`}
                    >
                        Green Gourmet Experience
                    </span>
                    <span className="text-lg">Welcome to Grand Boulevard</span>
                    <span className="text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Velit accusamus non consectetur quo cumque cum! Ad
                        hic eligendi nobis harum? Totam nemo praesentium quod
                        animi labore optio expedita dolorum natus.
                    </span>
                </div>
            </section>
        </>
    )
}
