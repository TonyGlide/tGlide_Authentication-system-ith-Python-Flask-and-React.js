import React, { useState, useContext } from "react";
import { Context } from '../store/appContext';

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {store, action} = useContext(Context);
        

    return (
        <>
        <div className="signup-page">
             <div>
                <h1>Sign Up</h1>
            <div/>    
            <div>
                <input />
                <input />
            </div>
            <div>
                <button>Sign Up</button>
            </div>

        </div>
        


        </>
    );
}

