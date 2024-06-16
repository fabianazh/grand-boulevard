import Image from 'next/image'

export default function AboutPage() {
    return (
        <>
            <section
                id="about"
                className="w-full bg-stone-200 py-16 lg:py-24 text-center px-6 lg:px-[22rem]"
            >
                <span className="mb-5 text-3xl font-light block">
                    THE STORY
                </span>
                <span className="block leading-loose tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi nam iusto, nisi cupiditate ex hic similique,
                    incidunt iste at excepturi voluptate animi quam non?
                    Aspernatur illum blanditiis aliquam cupiditate
                    necessitatibus! Provident ex facilis doloribus, maxime nihil
                    voluptatibus.
                </span>
            </section>
            <section className="w-full h-fit grid grid-cols-3 border">
                <Image
                    src={'/img/f4.jpg'}
                    alt=""
                    width={900}
                    height={900}
                    className="w-full h-full"
                />
                <Image
                    src={'/img/f2.jpg'}
                    alt=""
                    width={900}
                    height={900}
                    className="w-full h-full"
                />
                <Image
                    src={'/img/f3.jpg'}
                    alt=""
                    width={900}
                    height={900}
                    className="w-full h-full"
                />
            </section>
        </>
    )
}
