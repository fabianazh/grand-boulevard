import MenuContainer from '@/components/Other/MenuContainer'

export default function MenuPage() {
    return (
        <>
            <section
                id="menu"
                className="w-11/12 lg:w-8/12 mx-auto flex flex-col py-8 lg:py-12"
            >
                <span className="text-2xl lg:text-3xl tracking-tighter block mx-auto mb-5 lg:mb-8">
                    OUR MENU
                </span>
                <div className="flex flex-col gap-8 lg:gap-12">
                    <MenuContainer
                        category="Main"
                        tagline="Hearty and filling dishes"
                    >
                        <MenuContainer.Menu
                            item="Grilled Salmon"
                            price="Rp 120.000"
                            description="Served with roasted vegetables and garlic butter sauce."
                        />
                        <MenuContainer.Menu
                            item="Beef Steak"
                            price="Rp 150.000"
                            description="Grilled to perfection with a side of mashed potatoes and gravy."
                        />
                        <MenuContainer.Menu
                            item="Chicken Alfredo"
                            price="Rp 95.000"
                            description="Creamy Alfredo pasta with grilled chicken and parmesan."
                        />
                        <MenuContainer.Menu
                            item="Vegetable Stir-fry"
                            price="Rp 80.000"
                            description="Mixed vegetables stir-fried with soy sauce and garlic."
                        />
                        <MenuContainer.Menu
                            item="BBQ Ribs"
                            price="Rp 175.000"
                            description="Slow-cooked ribs with BBQ sauce, served with coleslaw."
                        />
                    </MenuContainer>

                    <MenuContainer
                        category="Brunch"
                        tagline="Start your day with a delicious meal"
                    >
                        <MenuContainer.Menu
                            item="Avocado Toast"
                            price="Rp 45.000"
                            description="Smashed avocado on toasted sourdough with poached eggs."
                        />
                        <MenuContainer.Menu
                            item="Pancakes"
                            price="Rp 55.000"
                            description="Fluffy pancakes served with maple syrup and fresh berries."
                        />
                        <MenuContainer.Menu
                            item="Eggs Benedict"
                            price="Rp 70.000"
                            description="Poached eggs on English muffins with hollandaise sauce."
                        />
                        <MenuContainer.Menu
                            item="French Toast"
                            price="Rp 50.000"
                            description="Brioche bread dipped in egg batter, served with syrup."
                        />
                        <MenuContainer.Menu
                            item="Breakfast Burrito"
                            price="Rp 65.000"
                            description="Tortilla filled with scrambled eggs, sausage, and cheese."
                        />
                    </MenuContainer>

                    <MenuContainer
                        category="Appetizer"
                        tagline="Small bites to start your meal"
                    >
                        <MenuContainer.Menu
                            item="Bruschetta"
                            price="Rp 35.000"
                            description="Grilled bread topped with fresh tomatoes, basil, and olive oil."
                        />
                        <MenuContainer.Menu
                            item="Stuffed Mushrooms"
                            price="Rp 40.000"
                            description="Mushrooms stuffed with cheese and herbs."
                        />
                        <MenuContainer.Menu
                            item="Spring Rolls"
                            price="Rp 30.000"
                            description="Crispy rolls filled with vegetables, served with dipping sauce."
                        />
                        <MenuContainer.Menu
                            item="Garlic Bread"
                            price="Rp 25.000"
                            description="Toasted bread topped with garlic butter."
                        />
                        <MenuContainer.Menu
                            item="Chicken Wings"
                            price="Rp 50.000"
                            description="Spicy chicken wings served with blue cheese dip."
                        />
                    </MenuContainer>

                    <MenuContainer
                        category="Dessert"
                        tagline="Sweet treats to end your meal"
                    >
                        <MenuContainer.Menu
                            item="Chocolate Lava Cake"
                            price="Rp 60.000"
                            description="Warm chocolate cake with a gooey center, served with vanilla ice cream."
                        />
                        <MenuContainer.Menu
                            item="Tiramisu"
                            price="Rp 50.000"
                            description="Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese."
                        />
                        <MenuContainer.Menu
                            item="Cheesecake"
                            price="Rp 65.000"
                            description="Creamy cheesecake with a graham cracker crust."
                        />
                        <MenuContainer.Menu
                            item="Fruit Tart"
                            price="Rp 55.000"
                            description="Fresh fruit on a pastry crust with custard filling."
                        />
                        <MenuContainer.Menu
                            item="Ice Cream Sundae"
                            price="Rp 45.000"
                            description="Vanilla ice cream topped with chocolate sauce and nuts."
                        />
                    </MenuContainer>

                    <MenuContainer
                        category="Drinks"
                        tagline="Refreshing beverages"
                    >
                        <MenuContainer.Menu
                            item="Iced Coffee"
                            price="Rp 30.000"
                            description="Cold brewed coffee served over ice."
                        />
                        <MenuContainer.Menu
                            item="Mango Smoothie"
                            price="Rp 35.000"
                            description="Fresh mango blended with yogurt and honey."
                        />
                        <MenuContainer.Menu
                            item="Lemonade"
                            price="Rp 25.000"
                            description="Freshly squeezed lemonade."
                        />
                        <MenuContainer.Menu
                            item="Green Tea"
                            price="Rp 20.000"
                            description="Hot or iced green tea."
                        />
                        <MenuContainer.Menu
                            item="Sparkling Water"
                            price="Rp 15.000"
                            description="Carbonated water."
                        />
                    </MenuContainer>
                </div>
            </section>
        </>
    )
}
