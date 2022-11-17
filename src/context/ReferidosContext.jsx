import React, { useState } from "react";

const ReferidosContext = React.createContext(null);

const ReferidosContextProvider = ({ children }) => {
  const [modalError, setModalError] = useState(false);
  const [modalCase, setModalCase] = useState(0);
  return (
    <ReferidosContext.Provider
      value={{
        modalError,
        setModalError,
        modalCase,
        setModalCase,
      }}
    >
      {children}
    </ReferidosContext.Provider>
  );
};

export { ReferidosContextProvider, ReferidosContext };
