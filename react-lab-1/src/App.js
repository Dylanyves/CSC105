import "./App.css";
import TodoPage from "./pages/TodoPage";
import TodayPage from "./pages/TodayPage";
import Calendar from "./pages/Calendar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route exect path="/" element={<HomePage />} />
            <Route exect path="/todo" element={<TodoPage />} />
            <Route exect path="/today" element={<TodayPage />} />
            <Route exect path="/calendar" element={<Calendar />} />
        </Routes>
    );
}
export default App;
