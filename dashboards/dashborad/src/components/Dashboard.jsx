import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import Funds from "./Funds";
import Holding from "./Holding";
import Order from "./Order";
import Position from "./Position";
import Summary from "./Summary";
import WatchList from "./WatchList";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
   
        <WatchList />
   
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/holdings" element={<Holding />} />
          <Route path="/positions" element={<Position />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

