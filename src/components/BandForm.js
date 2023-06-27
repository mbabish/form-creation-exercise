import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BandDetails from './bandDetails/BandDetails';
import TicketDetails from './ticketDetails/TicketDetails';

function BandForm({ band }) {
  return (
    <Container>
      <Row>
        <Col>
          <BandDetails band={band} />
        </Col>
        <Col xs lg="8">
          <TicketDetails band={band} />
        </Col>
      </Row>
    </Container>
  );
}

export default BandForm;
