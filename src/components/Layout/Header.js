import React from "react";

import headerImg from "../../assets/vegan-plant-based-news-healthy-food.jpeg";
import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>The Green Seeds</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div>
                <img
                    className={styles["main-image"]}
                    src={headerImg}
                    alt="Healthy vegan food"
                />
            </div>
        </>
    );
};

export default Header;
