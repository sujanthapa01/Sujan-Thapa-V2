import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, SignUp, Signin, PageNotFound, Projects, AboutMe, Layout} from "./index";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
