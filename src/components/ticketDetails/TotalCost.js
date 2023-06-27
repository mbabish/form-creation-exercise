import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import currencyFormatter from "../../helpers/currencyFormatter";

function TotalCost(totalCost) {
  return (
    <Container>
      <Row>
        <Col>
          <h4 className='header'>TOTAL</h4>
        </Col>
        <Col xs lg="2">
          <input type="text" min="0" className="form-control" value={currencyFormatter.format(totalCost.totalCost / 100)} readOnly/>
        </Col>
      </Row>
    </Container>
  );
}

export default TotalCost;
