import React from 'react';
import { Table } from 'react-bootstrap';

const data = [
  {
    "serviceName": "Service 1",
    "startTime": "2023-03-07T10:00:00",
    "endTime": "2023-03-07T11:00:00"
  },
  {
    "serviceName": "Service 2",
    "startTime": "2023-03-07T11:00:00",
    "endTime": "2023-03-07T12:00:00"
  },
  {
    "serviceName": "Service 3",
    "startTime": "2023-03-07T12:00:00",
    "endTime": "2023-03-07T13:00:00"
  },
  {
    "serviceName": "Service 4",
    "startTime": "2023-03-07T13:00:00",
    "endTime": "2023-03-07T14:00:00"
  },
  {
    "serviceName": "Service 5",
    "startTime": "2023-03-07T14:00:00",
    "endTime": "2023-03-07T15:00:00"
  }
];

const ServiceTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Service Name</th>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((service, index) => (
          <tr key={index}>
            <td>{service.serviceName}</td>
            <td>{service.startTime}</td>
            <td>{service.endTime}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ServiceTable;
