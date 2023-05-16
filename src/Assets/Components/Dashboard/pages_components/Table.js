import React from "react";
import pic from "../../../images/customer.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";

const Table = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  function Clear_button() {
    document.body.classList.remove('changeStyle');
  }
   
  return (
    <section className="main" onClick={() => {
      Clear_button();
    }}>
      <div className="price_table">
        <div className="for_input">
          <h1>Table</h1>
        <div className="page">
          <Form.Select aria-label="Default select example">
            <option>No.</option>
            <option value="1">1</option>
            <option value="2">3</option>
            <option value="3">3</option>
          </Form.Select>
          <div className="searching">
            <SearchIcon className="search" />
           
            <input type="search" placeholder="Search" />
          </div>
        </div>
        </div>

         <div className="data">   
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Product</th>
              <th>Invoice</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody className="table-body">
            <tr className="table_row">
              <td>
                <div className="customer">
                  <div className="image">
                    <img src={pic} />
                  </div>
                  <p>Luke Ivory</p>
                </div>
              </td>

              <td>Headphone</td>

              <td>#333333</td>

              <td>$1000.00</td>

              <td>$10.00</td>

              <td>
                <button type="custom-btn btn-15" className="edit">
                  Edit
                </button>
              </td>
            </tr>

            <tr className="table_row">
              <td>
                <div className="customer">
                  <div className="image">
                    <img src={pic} />
                  </div>
                  <p>Luke Ivory</p>
                </div>
              </td>

              <td>Headphone</td>

              <td>#333333</td>

              <td>$1000.00</td>

              <td>$10.00</td>

              <td>
                <button type="button" className="edit">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>


        <div className="page">
        <Pagination size="sm">{items}</Pagination>
      </div>
        </div>
      </div>

     
    </section>
  );
};

export default Table;
