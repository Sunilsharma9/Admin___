import logo from './logo.svg';
import './App.css';
import './Assets/sass/style.scss'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Dashboard_page from './Assets/Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from '../src/Assets/Components/Dashboard/Sidebar'
import Header from '../src/Assets/Components/Dashboard/Header'
import Home from '../src/Assets/Components/Dashboard/home'
import Table from './Assets/Components/Dashboard/pages_components/Table';
import Form from './Assets/Components/Dashboard/pages_components/Form';
function App() {
  function Dashboard(){
      return(
      <>
          <Header/>
          <Sidebar/>
          <Outlet/>
      </>
      
      )
  }  


  return (

    <Router>
        <Routes>


            <Route element={<Dashboard />}>
                <Route  path="/" element={<Dashboard_page />} />
                <Route  path="/table" element={<Table />} />
                <Route  path="/form" element={<Form />} />
                
            </Route>
          </Routes>
    </Router>
   


  );
}

export default App;
