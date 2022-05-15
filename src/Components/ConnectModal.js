import React, { useState } from 'react';

const ConnectModal = () => {
    const [signUp,setSignUp] = useState(true);
    return (
        <div className="connect-modal">
            <div className="header-btn">
                <button style={{background: signUp ? "rgb(28,28,28)" 
                : "rgb(83, 83 ,83)"}}>S'inscrire</button>
                <button style={{background: signUp ? "rgb(83,83,83)" 
                : "rgb(28, 28 ,28)"}}>Se Connecter</button>
            </div>
        </div>
    );
};

export default ConnectModal;