import { useState } from "react";

const initialFormValues = {
    username: "",
    password: "",
    email: "",
};

function SignUp() {
    const [formValues, setFormValues] = useState(initialFormValues);

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

    return (
        <section>
            <label>Sign Up</label>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <input
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <button type="submit">Login</button>
            </form>
        </section>
    );
}

export default SignUp;
