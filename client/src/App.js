import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import CreateEvent from "./pages/CreateEvent";
import FindEvent from "./pages/FindEvent";
import DashBoard from "./pages/DashBoard";
import { ProfileModal } from "./components/ProfileModal";
import SinglePostPage from "./features/events/SingleEventPage";
import Auth from "./components/Auth";

function App() {
  return (
    <Auth>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<ProfileModal />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/findevent" element={<FindEvent />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route exact path="/event/:eventId" element={<SinglePostPage />} />
        <Route
          exact
          path="/dashboard/:dashboardParams"
          element={<SinglePostPage />}
        />
      </Routes>
    </Auth>
  );
}

export default App;
