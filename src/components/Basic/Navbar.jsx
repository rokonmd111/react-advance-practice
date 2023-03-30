import React from 'react';

const Navbar = (props) => {
    const handleMenu = props.handleMenu
    const category= props.category;
    return (
        <button className="btn-group__item" onClick={() => handleMenu(category)}>{category}</button>
    );
};

export default Navbar;