import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const SignUp = () => {
    const registerEmail = useRef();
    const registerPassword = useRef();
    const [displayName, setDisplayName] = useState("");

    const handleRegister = (e) => {
        e.preventDefault(); //pour que le formulaire se recharche

        try {
            auth
                .createUserWithEmailAndPassword(
                    // methode fiirebase
                    registerEmail.current.value,
                    registerPassword.current.value
                )
                .then(async (userAuth) => {
                    await userAuth.user.updateProfile([displayName]);
                });
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup">
                <h3>S'inscrire</h3>
                <form onSubmit={(e) => handleRegister(e)}>
                    <input
                        type="text"
                        placeholder="Pseudo"
                        required
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        ref={registerEmail}
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        require
                        ref={registerPassword}
                    />
                    <input type="submit" placeholder="Valider Inscription" required />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
