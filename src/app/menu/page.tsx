export default function Menu() {
    return (
        <>
            <section
                id="menu"
                className="w-8/12 mx-auto h-screen flex flex-col"
            >
                <span className="text-3xl tracking-tighter font-montserrat font-light block mx-auto">
                    OUR MENU
                </span>
                <div className="flex justify-between w-full">
                    <div className="w-1/2 truncate">Caesar Salad</div>
                    <div className="w-1/2 text-right">Rp 42.000</div>
                </div>
            </section>
        </>
    )
}
