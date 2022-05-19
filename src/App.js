import React from "react";
import ConnectModal from "./Components/ConnectModal";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [use, setUser] = useState(null);
  //et methode vas surveille si on est connect ou pas
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  });

  return (
    <div>
      <div className="app-header">
        <ConnectModal />
      </div>

      <div className="posts-container"></div>
    </div>
  );
};

export default App;
