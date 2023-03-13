import React from "react";
import { Table } from "react-bootstrap";
const data = [
    {
      "serviceName": "Service A",
      "status": "green"
    },
    {
      "serviceName": "Service B",
      "status": "red"
    },
    {
      "serviceName": "Service C",
      "status": "green"
    },
    {
      "serviceName": "Service D",
      "status": "green"
    },
    {
      "serviceName": "Service E",
      "status": "red"
    }
  ];
  
const ServiceStatusTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Service Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((service, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{service.serviceName}</td>
            <td>
              <span
                style={{
                  backgroundColor: service.status === "green" ? "#5cb85c" : "#d9534f",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  textTransform: "uppercase"
                }}
              >
                {service.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ServiceStatusTable;
