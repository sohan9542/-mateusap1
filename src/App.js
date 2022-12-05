import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "./pages/questions/Question";
import Win from "./pages/result/Win";
import Loose from "./pages/result/Loose";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Question />} />
          <Route path="/win" element={<Win />} />
          <Route path="/loose" element={<Loose />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
