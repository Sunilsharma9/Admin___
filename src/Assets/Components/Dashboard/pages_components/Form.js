import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Form from "react-bootstrap/Form";

const add = () => {
  function Clear_button() {
    document.body.classList.remove('changeStyle');
  }
   
  return (
    <section className="main"  onClick={() => {
      Clear_button();
    }}>
      <div className="for_input">
        <h1>Form</h1>
        
      </div>
      <div className="admin">
        
            <Form>
          <label>First Name</label>
          <br />
          <input className="form-control" type="text" />
          <label>Last Name</label>
          <br />
          <input className="form-control" type="text" />
          <label>Email</label>
          <br />
          <input className="form-control" type="text" />
          <label>Address</label>
          <br />
          <input className="form-control" type="text" />
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Number</option>
            <option value="2">Email</option>
            <option value="3">Message</option>
          </Form.Select>

          <button type="button" className="custom-btn btn-15">Submit</button>
          </Form>
        
      </div>
    </section>
  );
};

export default add;
