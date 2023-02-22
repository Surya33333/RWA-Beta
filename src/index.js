import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import './index.css';
import App from './components/Website/App';
import reportWebVitals from './reportWebVitals';
// import Services from "./components/Website/services";
// import Track from "./components/Website/track";
// import Stores from "./components/Website/stores";
// import Pricing from "./components/Website/pricing";
import Register from "./components/Website/Register/Register.js";
import Login from "./components/Website/Login/Login.js";
import ResetPassword from "./components/Website/ResetPassword/ResetPassword.js";
import UserDashboard from "./components/AdminPanel/AdminHome/AdminHome.js";
import Orders from "./components/AdminPanel/OrdersList/OrdersList.js";
import SelectedOrder from "./components/AdminPanel/SelectedOrder/SelectedOrder.js";
import Account from "./components/AdminPanel/Account/Account.js";
import Settings from "./components/AdminPanel/Settings/Settings.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


root.render(
  <BrowserRouter>
    <components>
      <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="services" element={<Services />} />
      <Route path="track" element={<Track />} />
      <Route path="stores" element={<Stores />} />
      <Route path="pricing" element={<Pricing />} /> */}
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />  
      <Route path="resetpassword" element={<ResetPassword />} />  
      <Route path="dashboard" element={<UserDashboard/>} />
      <Route path="orders" element={<Orders/>} />
      <Route path="account" element={<Account/>} />
      <Route path="/order/:OrderId" element={<SelectedOrder/>} /> 
      <Route path="/settings" element={<Settings/>} /> 
      </Routes>  
    </components>
  </BrowserRouter>
);



reportWebVitals();
