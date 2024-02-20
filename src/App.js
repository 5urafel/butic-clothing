import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/hats" Component={HatsPage} />
      </Routes>
    </div>
  );
}

export default App;
