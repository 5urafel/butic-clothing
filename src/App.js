import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/signin-and-signup/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/shop" Component={ShopPage} />
          <Route path="/signin" Component={SignInAndSignUp} />
        </Routes>
      </div>
    );
  }
}

export default App;
