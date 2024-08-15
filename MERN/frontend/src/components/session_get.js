import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


export default function Session_Set(){
    const [status, setStatus] = useState("")

    useEffect(() => {
        async function run(){
            const response = await fetch(`http://localhost:5000/session_get`,
                {
                    method: "GET",
                    credentials: 'include'
                }
            )
            if (!response.ok){
                const message = `an error occured: ${response.statusText}`
                window.alert(message)
                return
            }
            const statusResponse = await response.json()
            setStatus(statusResponse.status)
        }
        run();
        return;
    },[]);
    return (
        <div>
            <h3>Get Session</h3>
            <p>{status}</p>
        </div>
    );
}