import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Home />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/findevent" element={<Home />} />
      <Route path="/createevent" element={<Home />} />
    </Routes>
  );
}

export default App;
