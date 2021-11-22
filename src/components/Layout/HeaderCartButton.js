import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <>
            <button onClick={props.onClick} className={btnStyles}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span className={styles.badge}>{numberOfCartItems}</span>
            </button>
        </>
    );
};

export default HeaderCartButton;
