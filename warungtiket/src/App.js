import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/findevent" element={<Home />} />
      <Route path="/createevent" element={<CreateEvent />} />
    </Routes>
  );
}

export default App;
