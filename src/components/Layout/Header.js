import React from "react";

import headerImg from "../../assets/vegan-plant-based-news-healthy-food.jpeg";
import headerImg2 from "../../assets/01.jpg";
import headerImg3 from "../../assets/03.jpg";


import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>happy cactus</div>
                <div>
                    <HeaderCartButton
                        onClick={props.onShowCart}
                    ></HeaderCartButton>
                </div>
            </header>

            <div>
                <img
                    className={styles["main-image"]}
                    src={headerImg3}
                    alt="Healthy vegan food"
                />
            </div>
        </>
    );
};

export default Header;
