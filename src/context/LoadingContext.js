import React, { createContext, useContext, useState } from "react";

const defaultState = true;

const LoadingContext = createContext(defaultState);

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
const useLoading = () => useContext(LoadingContext);
export { LoadingProvider, useLoading };
export default LoadingContext;
