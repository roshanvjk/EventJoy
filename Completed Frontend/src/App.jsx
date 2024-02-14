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
import UserDashboard from "./Pages/userDashboard";
import AddonForm from "./Pages/addonform";
import AddonPage from "./Pages/addon";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import ThemeManagement from "./Pages/themeform";
import Booking from "./Pages/bookingform";


function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      {!user ?(
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : user.role === "user" ?(
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/foodmenu" element={<FoodMenu />} />
          <Route path="/party" element={<Party />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/addon" element={<AddonPage/>} />
          <Route path="/bookform" element={<Booking/>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/userEntry" element={<UserEntries />} />
          <Route path="/themeform" element={<ThemeManagement />} />
          <Route path="/addonForm" element={<AddonForm />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
