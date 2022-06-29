import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import { useState } from "react";
import Alert from "./component/Alert";
import About from "./component/About";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Disable Dark Mode");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Has Enabled", "success");
      document.title = "TextUtils-DarkMode";
    } else {
      setMode("light");
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Enabled", "success");
      document.title = "TextUtils-LightMode";
    }
  };
  return (
    <>
    <Router>
    <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          Text={text}
        />
        <Alert alert={alert} />
        <div className="container my-3">
    <Routes>
    <Route path="/about" element={<About mode={mode}/>} />
</Routes>
<Routes>
    <Route path="/" element={<TextForm
                heading="Enter The Text To Analyze"
                showAlert={showAlert}
              />} />
</Routes>
</div>
</Router>
     
    </>
  );
}

export default App ;

//for deployment create a repo and add local files in it
//search for deployment of create react app
//search github pages
//follow the step