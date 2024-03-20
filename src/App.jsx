import Aside from "./components/Aside/Aside.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListActivities from "./pages/ListActivities/ListActivities.jsx";
import { DataProvider } from "./components/DataContext/DataContest.jsx";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="containerCompletPage">
          <Aside />
          <Routes className="containerCompletPage">
            <Route path="/" element={<HomePage />} />
            <Route path="/ListActivities" element={<ListActivities />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
