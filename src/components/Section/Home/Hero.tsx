import { montserrat } from '@/app/fonts'
import Image from 'next/image'

export default function Hero() {
    return (
        <>
            <section
                id="home"
                className="w-full lg:w-10/12 h-auto text-white mx-auto mb-10 relative flex flex-col lg:flex-row"
            >
                {/* <div className="w-full h-screen bg-black/[.35] z-0 absolute"></div> */}
                <div></div>
                <Image
                    src={'/img/f.jpg'}
                    alt=""
                    width={900}
                    height={400}
                    quality={100}
                    className="lg:absolute lg:left-0 lg:top-0 w-full h-full"
                />
                <div className="w-full lg:w-6/12 py-14 lg:py-28 lg:pl-20 lg:pr-10 h-fit lg:h-screen z-10 bg-Green selection:bg-black/0 flex flex-col gap-4 lg:gap-5 pl-6 pr-6">
                    <span
                        className={`block text-5xl lg:text-7xl leading-tight lg:leading-tight ${montserrat.className}`}
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
