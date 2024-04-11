import React, { useState } from "react";
import { useStates } from "../../hooks/PortfolioContext";
const MyComponent = () => {
  const { states, handleCallback } = useStates();
  const { name, setName } = useState(false);
  const handleClick = () => {
    setName(!name);
    handleCallback(name);
  };

  return (
    <div>
      {states ? (
        <div>Component is visible</div>
      ) : (
        <div>Component is hidden</div>
      )}
      <button onClick={handleClick}>Toggle states</button>
    </div>
  );
};

export default MyComponent;
