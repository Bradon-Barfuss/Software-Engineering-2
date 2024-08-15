import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"


export default function Edit(){
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        savings: 0,
        checking: 0,
    })

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            const email = params.email.toString();
            const response = await fetch(`http://localhost:5000/record/${email}`)
            if (!response.ok){
                const message =  `An error occured: ${response.statusText}`
                window.alert(message)
                return
            }
            const responseRecord = await response.json()
            if (!responseRecord){
                window.alert(`Record with email: ${email} is not found`)
                navigate("/")
            }
            setForm(responseRecord);
            return;
        }
        fetchData();
        return;
    }, [params.email, navigate]);


    function updateForm(jsonObject){
        return setForm((prevJsonObject) => {
            return { ...prevJsonObject, ...jsonObject};
        })
    }

    async function onSubmit(e){
        e.preventDefault()
        const editedPerson = {
            firstName: form.firstName,
            lastName: form.lastName,
            role: form.role,
            phoneNumber : form.phoneNumber,
            password: form.password,
            
        };
        await fetch(`http://localhost:5000/update/${params.email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        navigate("/")
    }


    return (
        <div>
            <h3>Update Record</h3>
            <p>Update Record</p>
            <form onSubmit={onSubmit}>
                <div>
                    <label>First Name: </label>
                    <input type="text"
                    id="firstName"
                    value={form.firstName}
                    onChange={(e) => updateForm({firstName: e.target.value })}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text"
                    id="lastName"
                    value={form.lastName}
                    onChange={(e) => updateForm({lastName: e.target.value })}/>
                </div>
                <div>
                    <label>Role: </label>
                    <input type="text"
                    id="role"
                    value={form.role}
                    onChange={(e) => updateForm({role: e.target.value })}/>
                </div>
                <div>
                    <label>Phone Number: </label>
                    <input type="text"
                    id="phoneNumber"
                    value={form.phoneNumber}
                    onChange={(e) => updateForm({phoneNumber: e.target.value })}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="text"
                        id="password"
                        value={form.password}
                        onChange={(e) => updateForm({ password: e.target.value })}
                    />
                </div>
                <br />
                <div>
                    <input type="submit" value="Update Record"/>
                </div>
            </form>
        </div>
    );
}