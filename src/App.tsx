
import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header";

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Router>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
