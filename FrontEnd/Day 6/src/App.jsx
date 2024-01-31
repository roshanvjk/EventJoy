// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodMenu from "./Pages/FoodMenu";
import About from "./Pages/About";
import Homepage from "./Pages/HomePage";
import Party from "./Pages/party-themes";
import UserProfile from "./Pages/userprofile";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Admin";
import UserEntries from "./Pages/UserEntry";
import AddProducts from "./Pages/AddProduct";
import DeleteEvent from "./Pages/DeleteEvent";
import UpdateEvent from "./Pages/updateEvent";
import UserDashboard from "./Pages/userDashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/party" element={<Party />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/userEntry" element={<UserEntries />} />
        <Route path="/addProducts" element={<AddProducts />} />
        <Route path="/deleteEvents" element={<DeleteEvent />} />
        <Route path="/updateEvent" element={<UpdateEvent />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
