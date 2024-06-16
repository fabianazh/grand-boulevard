export default function MenuContainer({
    category,
    tagline,
    children,
}: {
    category: string
    tagline: string
    children: React.ReactNode
}) {
    return (
        <>
            <div className="w-full h-fit flex flex-col gap-5 lg:gap-8 font-medium">
                <div className="w-full flex flex-col gap-4">
                    <span className="text-xl">{category}</span>
                    <div className="w-full h-0.5 bg-black"></div>
                    <span>&quot;{tagline}&quot;</span>
                </div>
                <div className="w-full flex flex-wrap gap-y-8 justify-between">
                    {children}
                </div>
            </div>
        </>
    )
}

export function Menu({
    item,
    price,
    description,
}: {
    item: string
    price: string
    description: string
}) {
    return (
        <>
            <div className="flex flex-col w-full lg:w-5/12 shrink-0 h-fit gap-2 lg:gap-1">
                <div className="flex justify-between items-center relative overflow-hidden whitespace-nowrap">
                    <span className="text-lg">{item}</span>
                    <div className="border-b-2 place-self-end -translate-y-2 border-black border-dotted flex-grow mx-2"></div>
                    <span>{price}</span>
                </div>
                <span className="text-sm">{description}</span>
            </div>
        </>
    )
}

MenuContainer.Menu = Menu
