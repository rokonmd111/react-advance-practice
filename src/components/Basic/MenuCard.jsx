import React from 'react';

const MenuCard = (props) => {
    const { image, name, category, description, id } = props.menuData;
    return (
        <>   
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className='card-number card-circle subtle'>{id}</span>
                        <span className='card-author subtle'>{category}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description subtle">{}</span>
                        <div className="card-read">Read</div>
                        <img src={image} alt="" className="card-media" />
                        <span className="card-tag subtle">Order Now</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuCard;