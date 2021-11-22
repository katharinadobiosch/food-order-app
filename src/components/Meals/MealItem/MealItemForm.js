import React, { useRef, useState } from "react";

import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("button was clikcked");

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.container}>
                <Input
                    ref={amountInputRef}
                    // label="Menge"
                    input={{
                        id: "amount",
                        type: "number",
                        min: "1",
                        max: "5",
                        step: "1",
                        defaultValue: "1",
                    }}
                />
                <button className={styles.button}>+</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </div>
        </form>
    );
};

export default MealItemForm;
