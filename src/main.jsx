import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, SignUp, Signin, PageNotFound, Projects, AboutMe, Layout} from "./index";
import "./index.css";
import Dashboard from "./pages/Dashboard";



const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);}
    
  return (
<>
<div className="App">
      {/* <Dashboard/> */}
    </div>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
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
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
