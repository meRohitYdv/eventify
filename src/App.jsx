import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/events/:eventId"} element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )}

export default App;
