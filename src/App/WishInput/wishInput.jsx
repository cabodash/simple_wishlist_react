import React, { useState } from "react";
import PropTypes from 'prop-types';
import './wishInput.css'

const WishInput = ({ onNewWish }) => {
    const [newWishText, setNewWishText] = useState('');

    return (
        <div className="wishinput">
            <div className="wishinput__label">New Wishlist</div>
            <input
            className="wishinput__input"
                placeholder="Enter your new wish here"
                type="text"
                onChange={e => setNewWishText(e.target.value)}
                onKeyUp={e => {
                    if (e.key === 'Enter' && newWishText.length) {
                        onNewWish({ done: false, text: newWishText });
                        setNewWishText('');
                    }
                }}
            />
        </div>
    );
};

WishInput.propTypes = {
    onNewWish: PropTypes.func,

};

WishInput.defaultProps = {
    onNewWish: () => { },

};


export default WishInput;