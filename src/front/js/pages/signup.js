import React, { useState, useContext, useEffect } from "react";
import { Context } from '../store/appContext';
import { Navigate } from "react-router-dom";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {store, actions} = useContext(Context);
    
    const handleClick = () => {
        actions.Signup(email, password)
    }

useEffect(() => {
    if(store.isSignupSuccessful) {
        navigate("/login")
    }
})


    return (
        
        <div className="signup-page">
             <div>
                <h1>Sign Up</h1>
            <div/>  
            <div>
               {store.signupMessage || ""}
            </div>  
            <div>
                <input 
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input 
                   type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    />
            </div>
            <div>
                <button
                    onClick={handleClick}
                >Sign Up</button>
            </div>

        </div>
        </div>
        
        
    );
}