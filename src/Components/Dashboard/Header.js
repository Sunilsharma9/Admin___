import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import pic from '../../Assets/images/customer.jpeg';

const Header = () => {
    function myStyle() {
        var element = document.body;
        element.classList.toggle("changeStyle");
      }
  return (
    <div className="menu">
        
    <div className="menu-bar">
                    <button type="button"><ReorderIcon className="toggle_icon"  onClick={() => {
              myStyle();
            }}/></button>
                    
                    <div className="profile">
                  <img src={pic}/>
                  <div className="user">
                    <h3>Marry Charlie</h3>
                    <p>User</p>
                  </div>
                </div>

                {/* <div className="profile">
                  <img src={pic}/>
                  <div className="user">
                    <h3>Marry Charlie</h3>
                    <p>User</p>
                  </div>
                </div> */}
             

                </div>
                </div>
  )
}

export default Header