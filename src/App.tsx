import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Button from "./components/UI/Button/Button";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import Product from "./models/product";
import Products from "./components/Products/Products";
import Sidebar from "./components/SideBar/Sidebar";
import logo from "./logo.svg";
import { arrayBuffer } from "stream/consumers";
import Orders from "./components/Orders/Orders";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`flex App ${darkMode ? "dark" : ""}`}>
      <Sidebar darkmode={darkMode} changeTheme={changeTheme} />

      <div className=" bg-gray-200 dark:bg-gray-800 grow">
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />

          <Route path="/settings" element={<h1>Settings</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products darkMode={darkMode} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
