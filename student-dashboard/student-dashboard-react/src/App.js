import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import Home from "./pages/home";
import Tasks from "./pages/tasks";
import About from "./pages/about";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="Student Task Manager" />
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto p-6 bg-white mt-6 rounded shadow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer text="Made by Shivam" />
    </div>
  );
}

export default App;
