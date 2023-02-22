import './App.css';
import './main.scss';
import Navbar from "./Navbar/Navbar.js";
import { Link } from "react-router-dom";


function App() {
console.log("App");
  return (
    <body class="body">
    <div>
      <Navbar />
      <div class="main">
        <div class="content">
          <h1 className="head text-slate-900">Sample</h1>
          <p>Get started with our logistic solutions now, and get most valuble services through us from your comfort of zone.</p>
          <Link class="button" to="/register" style={{float:'left'}}>Register</Link>
        </div>
        <div class="image">
          image
        </div>
      </div>


  </div>

</body>

 );
}

export default App;
