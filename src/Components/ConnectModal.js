import React, { useState } from 'react';

const ConnectModal = () => {
    const [signUp,setSignUp] = useState(true);
    return (
        <div className="connect-modal">
            <div className="header-btn">
                <button>S'inscrire</button>
                <button>Se Connecter</button>
            </div>
        </div>
    );
};

export default ConnectModal;