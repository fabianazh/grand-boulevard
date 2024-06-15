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
            <section>{/* <AboutCarousel /> */}</section>
        </>
    )
}
