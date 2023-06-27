import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TicketList from './TicketList';
import CheckoutForm from './CheckoutForm';

import useShoppingCart from "../../hooks/useShoppingCart";

function TicketDetails({ band }) {
  const { shoppingCart, setBand, updateTicketAmount, getTotalCost } = useShoppingCart(band.ticketTypes);

  setBand(band.id);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Select Tickets</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <TicketList ticketTypes={band.ticketTypes} shoppingCart={shoppingCart} updateTicketAmount={updateTicketAmount}/>
          <br/>
          <CheckoutForm totalCost={getTotalCost()}/>
        </Col>
      </Row>
    </Container>
  );
}

export default TicketDetails;
