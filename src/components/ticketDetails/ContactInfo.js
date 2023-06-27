import { useState } from "react";
import _ from "lodash";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ContactInfo() {
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    address: ''
  });

  const updateFirstName = (e) => {
    var newFirstName = e.target.value;
    if (contactInfo.firstName !== newFirstName) {
      var newContactInfo = _.cloneDeep(contactInfo);
      newContactInfo.firstName = newFirstName;
      setContactInfo(newContactInfo);
    }
  };
  const updateLastName = (e) => {
    var newLastName = e.target.value;
    if (contactInfo.lastName !== newLastName) {
      var newContactInfo = _.cloneDeep(contactInfo);
      newContactInfo.lastName = newLastName;
      setContactInfo(newContactInfo);
    }
  };
  const updateAddress = (e) => {
    var newAddress = e.target.value;
    if (contactInfo.address !== newAddress) {
      var newContactInfo = _.cloneDeep(contactInfo);
      newContactInfo.address = newAddress;
      setContactInfo(newContactInfo);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingFirstname" label="First Name" className="mb-3">
            <Form.Control type="text" placeholder="First Name" value={contactInfo.firstName} onChange={updateFirstName}/>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="floatingLastname" label="Last Name" className="mb-3">
            <Form.Control type="text" placeholder="Last Name" value={contactInfo.lastName} onChange={updateLastName}/>
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <FloatingLabel controlId="floatingAddress" label="Address" className="mb-3">
            <Form.Control type="text" placeholder="Address" value={contactInfo.address} onChange={updateAddress}/>
          </FloatingLabel>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
