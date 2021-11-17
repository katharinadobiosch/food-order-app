import React from "react";

import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <Input
                    label="Menge"
                    input={{
                        id: "amount_" + props.id,
                        type: "number",
                        min: "1",
                        max: "5",
                        step: "1",
                        defaultValue: "1",
                    }}
                />
                <button>+</button>
                {/* <button>-</button> */}
            </form>
        </>
    );
};

export default MealItemForm;
