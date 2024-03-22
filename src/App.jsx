import Aside from "./components/Aside/Aside.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListActivities from "./pages/ListActivities/ListActivities.jsx";
import { DataProvider } from "./components/DataContext/DataContest.jsx";
import { DataProviderActivity } from "./components/DataContext/DataContextActivity.jsx";

function App() {
  return (
    <DataProvider>
      <DataProviderActivity>
      <BrowserRouter>
        <div className="containerCompletPage">
          <Aside />
          <Routes className="containerCompletPage">
            <Route path="/" element={<HomePage />} />
            <Route path="/ListActivities" element={<ListActivities />} />
          </Routes>
        </div>
      </BrowserRouter>
      </DataProviderActivity>
    </DataProvider>
  );
}

export default App;
