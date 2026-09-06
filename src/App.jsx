import { Routes, Route } from "react-router-dom";
import Students from "./pages/Students";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Students />} />
    </Routes>
  );
}

export default App;