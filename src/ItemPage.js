import React from "react";
import PropTypes from 'prop-types';
import Item from "./Item";
import './ItemPage.css';

function ItemPage({items, onAddToCart}){
    return (
        <ul className="ItemPage-items">
            {items.map(item =>
                <li key={item.id} className="ItemPage-items">
                    <Item item={item} onAddToCart={() => onAddToCart(item)}>
                        <button className="Item-addToCart" onClick={() => onAddToCart(item)}>Add To Cart</button>
                    </Item>
                </li>    
            )}

        </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemPage;