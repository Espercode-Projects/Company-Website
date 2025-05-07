import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export  function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <StateContext.Provider
      value={{
        user,
        token,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}


export const useStateContext = () => useContext(StateContext);
