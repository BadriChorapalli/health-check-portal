import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "react-bootstrap";
import { Container, Row, Col, Button  } from 'react-bootstrap';
import ServiceTable from './ServiceTable';
import ServiceStatusTable from "./ServiceStatusTable";


function App() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6',
    'Feature 7', 'Feature 8', 'Feature 9', 'Feature 10', 'Feature 11', 'Feature 12',
    'Feature 13', 'Feature 14', 'Feature 15', 'Feature 16', 'Feature 17', 'Feature 18',
    'Feature 19', 'Feature 20', 'Feature 21', 'Feature 22', 'Feature 23', 'Feature 24'];
  
  function handleStartDateChange(date) {
    setSelectedStartDate(date);
  }
  function handleEndDateChange(date) {
    setSelectedEndDate(date);
  }
  const myStyle = {
    whiteSpace: 'nowrap'
  };
  
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-12">
          <div class="row">
          <div class="col-12">Add Maintenance Details</div>
          </div>
            <div class="row">
              <div class="col-md-3">
                <select class="form-select" aria-label="Select an option">
                  <option selected>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div class="col-md-3">
                <div className="form-group row">
                  <label htmlFor="s-date" className="col-sm-3 col-form-label" style={myStyle}>
                    Start Date
                  </label>
                  <div className="col-sm-9">
                    <DatePicker
                      id="s-date"
                      className="form-control"
                      selected={selectedStartDate}
                      onChange={handleStartDateChange}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div className="form-group row">
                  <label htmlFor="e-date" className="col-sm-3 col-form-label" style={myStyle}>
                    End Date
                  </label>
                  <div className="col-sm-9">
                    <DatePicker
                      id="e-date"
                      className="form-control"
                      selected={selectedEndDate}
                      onChange={handleEndDateChange}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-3"> <Button variant="primary">Add Schedule </Button></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
          <Container>
          <center><caption style={myStyle}>Features List </caption></center>
      {[...Array(4)].map((_, rowIndex) => (
        <Row key={`row-${rowIndex}`}>
          {[...Array(6)].map((_, colIndex) => (
            <Col key={`col-${colIndex}`}>
              <Button style={{ margin: '5px' }}>{features[rowIndex * 6 + colIndex]}</Button>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
            
          </div>
        </div>
        <div class="row">
          <div class="col-12"> 
          <center><caption style={myStyle}>Schedule Maintenance </caption></center>
          <ServiceTable /> </div>
        </div>
        <div class="row">
          <div class="col-12"> 
          <center><caption style={myStyle}>Services Status</caption></center>
         <ServiceStatusTable></ServiceStatusTable>
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
