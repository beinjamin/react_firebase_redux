import React from 'react';

const SignUp = () => {
    return (
        <div className="signup-container">
            <div className="signup">
                <h3>S'inscrire</h3>
                <form>
                    <input type="text" placeholder="Pseudo" required/>
                    <input type="email" placeholder="Email" required/>
                    <input type="password" placeholder="Mot de passe" required/>
                    <input type="submit" placeholder="Valider Inscription" required/>



                </form>

            </div>
        </div>
    );
};

export default SignUp;