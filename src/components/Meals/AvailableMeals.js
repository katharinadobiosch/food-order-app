import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "VEagle  Burger",
        description:
            "Hafer-GrünkernPatty im weichen Weizenbrötchen getoppt mit EggplantBacon und einer Handvoll knackig-cremigem Coleslaw",
        price: 13.3,
    },
    {
        id: "m2",
        name: "Jackfruit Paprika Gulasch",
        description:
            "Ein kräftiges Eintopf-Gericht aus Jackfruit, Sauerkraut, Zwiebeln und Paprika, serviert mit einem Klecks Cashew-Schmand, Shcnittlauch und rustikalem Kartoffelstampf",
        price: 14.6,
    },
    {
        id: "m3",
        name: "Eine Schüssel Herbst",
        description:
            "Cremiges Wirsing-Austernpilzragout mit marinierten Kürbisspaöten, Röstkartoffeln, knackigen Haselnüssen und herbstlichem Preiselbeer-Salat",
        price: 14.3,
    },
    {
        id: "m4",
        name: "Five Bean Chili",
        description:
            "Reichlich Hülsenfrüchte und eine ausgefeilte Würzmischung mchen es einzigartig, serviert mit Weizentortilla, spicy Guacamole, Cashew-Schmand und rauchiger Chipotle Sauce",
        price: 13.8,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    return (
        <>
            <section className={styles.meals}>
                <Card>
                    <ul>{mealsList}</ul>
                </Card>
            </section>
        </>
    );
};

export default AvailableMeals;
