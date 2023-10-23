import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import CreateEvent from "./pages/CreateEvent";
import FindEvent from "./pages/FindEvent";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/findevent" element={<FindEvent />} />
      <Route path="/createevent" element={<CreateEvent />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
