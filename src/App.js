import HomePage from "./pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";

import ShopPage from "./pages/shop/shop.component";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
      </Routes>
    </div>
  );
}

export default App;
