import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { AuthContext, useAuthInit } from "./firebase/auth";
import { FormDataProvider } from "./context/FormData";

import Home from "./pages/Home"
import About from "./pages/About"
import DataAnal from "./pages/DataAnal"
import Security from "./pages/Security"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const authState = useAuthInit();
  return (
    <AuthContext.Provider value={{ loggedIn: authState.loggedIn }}>
      <FormDataProvider>
        <HashRouter>
            <>
              <Route exact path="/" component={Home}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/security" component={Security}></Route>
              <Route path="/data" component={DataAnal}></Route>
            </>
          </HashRouter>
      </FormDataProvider>
    </AuthContext.Provider>
  );
}

export default App;
