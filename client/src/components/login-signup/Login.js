import { useState } from "react";

const initialFormValues = {
    username: "",
    password: "",
    email: "",
};

const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [inputSelect, setInputSelect] = useState("username");

    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    const handleClick = (e) => {
        setInputSelect(e.target.name);
        console.log(e.target.name);
    };

    return (
        <section>
            <label>Login</label>
            <form onSubmit={handleSubmit}>
                {inputSelect === "email" && (
                    <>
                        <input
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                            placeholder="Username"
                        />
                        <button
                            name="username"
                            type="button"
                            onClick={handleClick}
                        >
                            Use email instead
                        </button>
                    </>
                )}
                {inputSelect === "username" && (
                    <>
                        <input
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <button
                            name="email"
                            type="button"
                            onClick={handleClick}
                        >
                            Use username instead
                        </button>
                    </>
                )}
                <input
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </section>
    );
};

export default Login;
