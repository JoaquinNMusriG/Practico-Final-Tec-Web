import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { ProfilePage } from "./pages/ProfilePage";
import { FactsPage } from './pages/FactsPage';
import { getUser } from "./api/user.api";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  const verify = (state) => {
    setCurrentUser(state);
  }

  useEffect(() => {
    getUser()
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<IndexPage currentUser={currentUser} verify={verify}/>} />
        <Route path="/profile" element={<ProfilePage currentUser={currentUser} verify={verify}/>} />
        <Route path="/facts/:gen" element={<FactsPage currentUser={currentUser} verify={verify}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
