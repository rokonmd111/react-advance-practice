import React, { useState } from 'react';
import './style.css';
import MenuCard from './MenuCard';
import Menu from './menuApi';
import Navbar from './Navbar';

const categoryList = [
  ...new Set(
    Menu.map((list) => {
      return list.category;
    })
  ), 'All'
]

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(categoryList);

  const handleMenu = (category) => {

    if (category === 'All') {
      setMenuData(Menu)
      return
    }

    const newMenu = Menu.filter((oldMenu) => {
      return oldMenu.category === category
    });
    setMenuData(newMenu);
  }

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {
            menuList.map((category) => <Navbar handleMenu={handleMenu} category={category}></Navbar>)
          }
        </div>
      </nav>

      <div className="main-card--cointainer">
        {
          menuData.map(menuData => <MenuCard key={menuData.id} menuData={menuData}></MenuCard>)
        }
      </div>
      
    </>
  );
};

export default Resturant;