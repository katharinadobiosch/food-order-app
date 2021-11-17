import React from "react";

import Modal from "../UI/Modal";

import styles from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = (
        <ul className={styles["cart-items"]}>
            {[{ id: "c1", name: "VEagle Burger", amount: 2, price: 13.3 }].map(
                (item) => (
                    <li>{item.name}</li>
                )
            )}
        </ul>
    );
    return (
        <>
            <Modal onClose={props.onClose}>
                {cartItems}
                <div className={styles.total}>
                    <span>TOTAL AMOUNT</span>
                    <span>26.60</span>
                </div>
                <div className={styles.actions}>
                    <button
                        className={styles["button-alt"]}
                        onClick={props.onClose}
                    >
                        Close
                    </button>
                    <button className={styles.button}>Order</button>
                </div>
            </Modal>
        </>
    );
};

export default Cart;
