import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";

export const AppContext = createContext();

function App() {
  const [willData, setWillData] = useState({});
  return (
    <AppContext.Provider value={{
      willData: willData,
      setWillData: setWillData
    }}>
      <div>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}
export default App;
