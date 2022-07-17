import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// getting the categories to add dynamically and uniquely
const allCategories = ["all", ...new Set(items.map((item) => item.category))];


const App = () => {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);


const filterItems = (category) => {

    if(category === "all") {
        setMenuItems(items);
        return;
    }
    const newItems = items.filter((item) => 
        item.category === category);
        setMenuItems(newItems);
}

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Clothing Section</h2>
                    <div className="underline"></div>
                </div>

                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}


export default App;