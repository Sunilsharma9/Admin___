import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Table from 'react-bootstrap/Table';
import Sidebar from "../Dashboard/Sidebar";
import Header from "../Dashboard/Header";
import pic from '../../Assets/images/customer.jpeg'
import Card from "./pages_components/Card";
import SearchIcon from '@mui/icons-material/Search';



const Dashboard = () => {


  function Clear_button() {
    document.body.classList.remove('changeStyle');
  }
   
  
  return (
    <section className="main" onClick={() => {
      Clear_button();
    }}>
      
      <div className="for_input">
      <h1>Dashboard</h1>
                    </div>
     
           
          <Card/>
         
     
          
          


        

        



        

    </section>
  );
};

export default Dashboard;
