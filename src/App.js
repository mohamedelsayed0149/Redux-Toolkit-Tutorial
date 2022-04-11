import { useState } from "react";
import Counter from "./Counter";
import Header from "./Header";
import Users from "./Users";

function App() {
  const [counter, setCounter] = useState(0);
  const [isLogged, setIsLogged] = useState(false);

  const handleIncrement = (val) => {
    setCounter(counter + val);
  };
  const handleDecrement = (val) => {
    setCounter(counter - val);
  };

  const handleLogin = () => {
    setIsLogged(true);
  };
  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="app">
      <Header
        counter={counter}
        isLogged={isLogged}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />

      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />

      <Users />
    </div>
  );
}

export default App;
