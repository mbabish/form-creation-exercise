import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BandInfo from './BandInfo';
import ConcertInfo from './ConcertInfo';


function BandDetails({ band }) {
  return (
    <Container>
      <Row>
        <Col>
          <h2>{band.name}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <ConcertInfo band={band} />
        </Col>
      </Row>
      <Row>
        <Col>
          <BandInfo band={band} />
        </Col>
      </Row>
    </Container>
  );
}

export default BandDetails;
