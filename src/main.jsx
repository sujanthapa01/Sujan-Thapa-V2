import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, SignUp, Signin, PageNotFound, Projects, AboutMe, Layout } from "./index";
import { Provider } from "react-redux";
import { store } from "./App/Store";
import "./index.css";




const App = () => {
  return (
    <>
      <div className="App">
      </div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} >
            </Route>

          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
