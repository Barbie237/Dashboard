import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar';     
import "./home.scss";
import Navbar from "../../Components/navbar/Navbar";
import Widget from "../../Components/widget/Widget";
import Featured from '../../Components/featured/Featured';
import Chart from '../../Components/chart/Chart';
import Table from '../../Components/table/Table';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
      <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="payment"/>
          <Widget type="budget"/>
          <Widget type="balance"/>
        </div>
        <div className="charts"> 
          <Featured/>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/> 
        </div>
          <div className="listContainer">
           <div className="listTitle"> Latest Transactions </div>
            <Table/>
          </div>
    </div>
  </div>

  );
};

export default Home
