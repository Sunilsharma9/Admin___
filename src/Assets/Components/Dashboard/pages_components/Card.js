import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WorkIcon from '@mui/icons-material/Work';

const Card = () => {
  return (
      <div className="card">
                <Row>
                    <Col xl={6} lg={6} md={12} sm={12}>
                           <div className="first_column ">
                                <div className="first_col">
                                    <div className="left_content">
                                        <div className="main_balance">
                                            <div className="balance">
                                        <h3>Main Balance</h3>
                                        <h4>$1000000.00</h4>    
                                        </div>
                                        <div className="image">

                                        </div>

                                    </div>


                                    <div className="valid">
                                        <div className="thru">
                                            <p>VALID THRU</p>
                                            <p>08/24</p>
                                        </div>
                                        <div className="holder">
                                            <p>CARD HOLDER</p>
                                            <h3>Marry Critionid</h3>
                                        </div>
                                    </div>
                                    </div>    
                                    
                                    <div className="right-content">
                                        <div className="bank">
                                            <div className="card-name">
                                                <p>Card Name</p>
                                                <h4>Master Card</h4>
                                            </div>
                                            <div className="bank-name">
                                                <p>Bank Name</p>
                                                <h4>Standard Bank</h4>

                                            </div>
                                        </div>

                                        <div className="card-number">
                                            <h4>Card Number</h4>
                                            <p>1212 1212 1212 1212</p>
                                        </div>
                                    </div>
                                </div>     
                          
                            </div> 
                    </Col>

                    <Col xl={3} lg={3} md={6} sm={12}>
                           <div className="first_column second_col">
                               
                           <div className="image">
                                    <WorkIcon className="work"/>
                                </div>
                                <div className="title">
                                    <h2>Total Earning</h2>
                                    <h2>$1000.00</h2>
                                </div>
                            </div> 
                    </Col>


                    <Col xl={3} lg={3} md={6} sm={12}>
                           <div className="first_column third_col">
                               
                           <div className="image">
                                    <WorkIcon className="work"/>
                                </div>
                                <div className="title">
                                    <h2>Total Expense</h2>
                                    <h2>$1000.00</h2>
                                </div>
                            </div> 
                    </Col>

                
                </Row>
            </div> 

  )
}

export default Card