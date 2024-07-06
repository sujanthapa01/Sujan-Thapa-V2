import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, SignUp, Login, PageNotFound, Projects, AboutMe, Layout, Chat, ForgetPassword } from "./index";
import { Provider } from "react-redux";
import { store } from "./App/Store";
import { useSelector } from 'react-redux';

import "./index.css";

const App = () => {
  const theme = useSelector((state) => state.theme.theme)
  return (
    < main  className={`app ${theme === "dark" ? "dark" : "light"}`}>
      <div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forget-password" element={<ForgetPassword />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="Chat" element={<Chat />} />



          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );

};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
