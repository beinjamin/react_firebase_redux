import React from 'react';

const SignUp = () => {
const registerEmail = userRef();
const registerPassword = userRef();








    return (
        <div className="signup-container">
            <div className="signup">
                <h3>S'inscrire</h3>
                <form>
                    <input type="text" placeholder="Pseudo" required/>
                    <input type="email" placeholder="Email" required ref={registerEmail}/>
                    <input type="password" placeholder="Mot de passe" require ref={registerPassword}/>
                    <input type="submit" placeholder="Valider Inscription" required/>



                </form>

            </div>
        </div>
    );
};

export default SignUp;