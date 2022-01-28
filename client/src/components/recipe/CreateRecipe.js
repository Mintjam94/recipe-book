import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialFormValues = {
    title: "",
    description: "",
    ingredients: [],
};

const CreateRecipe = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [ingredient, setIngredient] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleIngredientChange = (e) => {
        e.preventDefault();
        setIngredient(e.target.value);
    };

    const handleIngredientClick = (e) => {
        e.preventDefault();
        setFormValues({
            ...formValues,
            ingredients: [...formValues.ingredients, ingredient],
        });
        setIngredient("");
    };

    return (
        <section>
            <label>Create Recipe</label>
            <form>
                <input
                    name="title"
                    type="text"
                    value={formValues.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <textarea
                    name="description"
                    value={formValues.description}
                    onChange={handleChange}
                    placeholder="Recipe description"
                />
                <ul>
                    {formValues.ingredients.map((eachIngredient) => {
                        return <li key={uuidv4()}>{eachIngredient}</li>;
                    })}
                </ul>
                <div>
                    <input
                        name="ingredient"
                        value={ingredient}
                        onChange={handleIngredientChange}
                        placeholder="New ingredient"
                    />
                    <button onClick={handleIngredientClick}>
                        Add Ingredient
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreateRecipe;
