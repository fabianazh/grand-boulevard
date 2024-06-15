import Image from 'next/image'

export default function Schedule() {
    return (
        <>
            <section className="w-full bg-transparent flex lg:h-screen justify-center font-medium text-center relative text-white">
                <div className="absolute left-0 top-0 w-full h-full overflow-hidden z-0">
                    <Image
                        src={'/img/f1.jpg'}
                        alt=""
                        width={1900}
                        height={1000}
                        className="w-full h-full object-cover brightness-[.7]"
                    />
                </div>
                <div className="flex flex-col py-20 lg:py-0 text-base lg:text-xl items-center justify-center gap-4 lg:gap-8 z-10 bg-black/50 w-full lg:w-fit px-10 lg:px-10 h-full">
                    <span className="text-3xl lg:text-4xl block font-normal">
                        OPERATIONAL HOURS
                    </span>
                    <span className="">ALL DAY</span>
                    <div className="flex flex-col gap-6 items-center">
                        <span className="">MONDAY - SUNDAY</span>
                        <span className="">11:00am - 10:00pm</span>
                        <span className="">( last order 09:00pm ) ​</span>
                    </div>
                    <span>
                        KINDLY STAY UPDATED AND <br /> INFORMED ON OUR INSTAGRAM
                        .
                    </span>
                </div>
            </section>
        </>
    )
}
