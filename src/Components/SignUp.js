import React, {useRef} from 'react';
import {auth} from "../utils/firebase.config";

const SignUp = () => {
const registerEmail = useRef();
const registerPassword = useRef();


const handleRegister = (e)  => {
    e.preventDefault(); //pour que le formulaire se recharche
    try{
    auth.createUserWithEmailAndPassword ()// methode fiirebase 
    }catch (error){
        console.log(error.message);

    }
    console.log(
        registerEmail.current.value, 
        registerPassword.current.value
        );   //pour passer les elements a la base donnée
    

};

    return (
        <div className="signup-container">
            <div className="signup">
                <h3>S'inscrire</h3>
                <form onSubmit={e => handleRegister(e)}>
                    <input type="text" placeholder="Pseudo" required/>
                    <input type="email" placeholder="Email" required   ref={registerEmail}/>
                    <input type="password" placeholder="Mot de passe" require   ref={registerPassword}/>
                    <input type="submit" placeholder="Valider Inscription" required/>



                </form>

            </div>
        </div>
    );
};

export default SignUp;