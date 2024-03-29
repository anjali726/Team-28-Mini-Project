import SignUpScreen from "./Screens/signUpScreen";
import LoginScreen from "./Screens/loginScreen";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ResidentScreen from "./Screens/residentScreen";
import ComplaintScreen from "./Screens/complaintScreen";
import AssignPending from "./Screens/AssignPending";
import AnnouncementScreen from './Screens/AnnouncementScreen';
import ServicesScreen from './Screens/ServicesScreen'
import AddSupervisor from "./Screens/AddSupervisor";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/signup" element={<SignUpScreen />} />
        <Route exact path="/resident/homePage" element={<ResidentScreen />} />
        <Route exact path="/admin/AssignPending" element={<AssignPending />} />
        <Route exact path="/resident/complaints" element={<ComplaintScreen />} />
        <Route exact path='/admin/announcementScreen' element={<AnnouncementScreen />} />
        <Route exact path='/admin/ServicesScreen' element={<ServicesScreen />} />
        <Route exact path='/admin/AddSupervisor' element={<AddSupervisor />} />

      </Routes>
    </BrowserRouter>

  );
};

export default App;
