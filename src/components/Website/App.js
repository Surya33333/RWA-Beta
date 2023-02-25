import './App.css';
import './main.scss';
import {React, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar/Navbar.js";
import { Link } from "react-router-dom";
import Register from "../Website/Register/Register.js";
import Login from "../Website/Login/Login";
import ResetPassword from "../Website/ResetPassword/ResetPassword.js";
import UserDashboard from "../AdminPanel/AdminHome/AdminHome.js";
import OrdersList from "../AdminPanel/OrdersList/OrdersList.js";
import SelectedOrder from "../AdminPanel/SelectedOrder/SelectedOrder.js";
import Account from "../AdminPanel/Account/Account.js";
import Settings from "../AdminPanel/Settings/Settings";
import UserContext from "../UseContext/UseContext.js";

function App() {

  const [user , setUser] = useState("test");

  return (
    <div className="">
      <Router>
          <UserContext.Provider value={{user, setUser}}>
          <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/orders:orderid" element={<SelectedOrder />} />
          </Routes>
          </UserContext.Provider>
      </Router>
    </div>
 );
}

export default App;
