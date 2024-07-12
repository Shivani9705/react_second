import React, { useState } from 'react';
import MenuCard from './MenuCard';
import './style.css'
import Menu from './MenuApi';
import Navbar from './Navbar';

const uniquevalue = [...new Set(Menu.map((curelem) => {
    return curelem.category;
})
),
    "All",
]
console.log(uniquevalue)

const Restaurent = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniquevalue)

    const filterItem = (category) => {

        if (category === "All") {
            setMenuData(Menu);
            return;
        }


        const upadatedvalue = Menu.filter((curElem) => {
            return curElem.category === category;
        })
        setMenuData(upadatedvalue);
    }

    return (
        <div>
            <Navbar menuList={menuList} filterItem={filterItem} />
            <MenuCard menuData={menuData} />
        </div>
    );
}

export default Restaurent;
