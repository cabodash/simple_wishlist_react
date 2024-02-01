import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import './wishItem.css'

const WishItem = ({ done, text, id, onDoneChange }) => {
    const [textColor, setTextColor] = useState('white');

    useEffect(() => {
        if (!done) {
            const timeout1 = setTimeout(() => {
                setTextColor('orange');
            }, 10000);
            const timeout2 = setTimeout(() => {
                setTextColor('red');
            }, 20000);

            return () => {
                clearTimeout(timeout1);
                clearTimeout(timeout2);
            };
        } else {
            setTextColor('white'); // Cambiar el color al inicial cuando está checked
        }
    }, [done]);

    return (
        <li className="wishitem" style={{ color: textColor }}>
            <input className="wishitem__input" id={id} checked={done} onChange={e => onDoneChange(e.target.checked)} type="checkbox" />
            <label className="wishitem__label" htmlFor={id}>{text}</label>
        </li>
    );
};

WishItem.propTypes = {
    done: PropTypes.bool,
    text: PropTypes.string,
    id: PropTypes.string,
    onDoneChange: PropTypes.func,
}
WishItem.defaultProps = {
    done: false,
    text: '',
    id: '',
    onDoneChange: () => { },
}

export default WishItem;