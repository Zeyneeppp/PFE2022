import React from 'react'
import "./Home.scss"
import Sidebar from '../../componets/sidebar/Sidebar'
import Navbar from '../../componets/navbar/Navbar'
import Widget from '../../componets/widget/Widget'
import Featured from '../../componets/featured/Featured'
import Featured4 from '../../componets/featured/Featured4'
import FeaturedOo from '../../componets/featured/FeaturedOo'
import Chart from '../../../src/componets/chart/Chart'
import Table from '../../componets/table/Table'


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" /> 
        </div>
        <div className="charts">
           <Featured /> 
           <FeaturedOo /> 
           <Featured4 /> 
         
           {/* <Chart title="Statistique d'abonnements" aspect={2/1} /> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">
            <h1>Notifications</h1>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};


export default Home;