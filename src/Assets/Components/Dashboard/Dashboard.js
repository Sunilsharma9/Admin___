import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Table from 'react-bootstrap/Table';
import Sidebar from "./Sidebar";
import Header from "./Header";
import pic from '../../images/customer.jpeg'
import Card from "./pages_components/Card";
import SearchIcon from '@mui/icons-material/Search';
const Dashboard = () => {
   
  return (
    <section className="main">
      
      <div className="for_input">
      <h1>Dashboard</h1>
      <div className="searching">
                    <SearchIcon className="search"/>
                    <input type="search" placeholder="Search"/>

                    
                
                    </div>
                    </div>
     
           
          <Card/>
         
     
          
          


        

        



        

    </section>
  );
};

export default Dashboard;
