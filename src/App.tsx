
import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header";

import {useMediaQuery} from 'react-responsive'
import { TabletMobile } from "./components/devices/tablet-mobile/tablet-mobile.component";
import {Desktop} from "./components/devices/desktop/desktop.component"
import { BigScreen } from './components/devices/big-screen/big-screen.component'
import { Laptop } from "./components/devices/laptop/laptop.component";
import { Mobile } from "./components/devices/mobile/mobile.component";



function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  
  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px)",
  });
  
  
    
    return (
      
      <div className={styles.App}>
      {isMobileDevice && <Mobile />}
      {isTabletDevice && <TabletMobile/>}
      {isDesktop && <Desktop/>}
      {isLaptop && <Laptop />}
      {isBigScreen && <BigScreen />}
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

export default App;
