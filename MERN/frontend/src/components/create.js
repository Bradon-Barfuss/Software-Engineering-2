import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const [registerForm, setRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        savings: 0,
        checking: 0,
    });

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    function updateRegisterForm(jsonObject) {
        return setRegisterForm((prevJsonObject) => {
            return { ...prevJsonObject, ...jsonObject };
        });
    }

    function updateLoginForm(jsonObject) {
        return setLoginForm((prevJsonObject) => {
            return { ...prevJsonObject, ...jsonObject };
        });
    }

    async function onSubmitCreate(e) {
        e.preventDefault();
        const newPerson = { ...registerForm };
        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
            .catch(error => {
                window.alert(error);
                return;
            });
        setRegisterForm({ firstName: "", lastName: "", email: "", phoneNumber: "", password: "" });
        navigate("/");
    }

    async function onSubmitLogin(e) {
        e.preventDefault();
        const loginData = { ...loginForm };
        const response = await fetch("http://localhost:5000/record/validAccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });
        const result = await response.json();
        if (response.ok && result.valid) {
            navigate("/");
        } else {
            window.alert(result.message || "Invalid login credentials");
        }
    }

    return (
        <div>
            <div>
                <h3>Account Registration</h3>
                <p>Create Record</p>
                <form onSubmit={onSubmitCreate}>
                    <div>
                        <label>First Name: </label>
                        <input type="text"
                            id="firstName"
                            value={registerForm.firstName}
                            onChange={(e) => updateRegisterForm({ firstName: e.target.value })} />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text"
                            id="lastName"
                            value={registerForm.lastName}
                            onChange={(e) => updateRegisterForm({ lastName: e.target.value })} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text"
                            id="email"
                            value={registerForm.email}
                            onChange={(e) => updateRegisterForm({ email: e.target.value })} />
                    </div>
                    <div>
                        <label>Phone Number: </label>
                        <input type="text"
                            id="phoneNumber"
                            value={registerForm.phoneNumber}
                            onChange={(e) => updateRegisterForm({ phoneNumber: e.target.value })} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text"
                            id="password"
                            value={registerForm.password}
                            onChange={(e) => updateRegisterForm({ password: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <input type="submit" value="Create Record" />
                    </div>
                </form>
            </div>
            <div>
                <h3>Login</h3>
                <p>Login to Account</p>
                <form onSubmit={onSubmitLogin}>
                    <div>
                        <label>Email: </label>
                        <input type="text"
                            id="loginEmail"
                            value={loginForm.email}
                            onChange={(e) => updateLoginForm({ email: e.target.value })} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text"
                            id="loginPassword"
                            value={loginForm.password}
                            onChange={(e) => updateLoginForm({ password: e.target.value })} />
                    </div>
                    <br />
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
}
