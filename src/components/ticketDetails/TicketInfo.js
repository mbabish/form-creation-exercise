import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import currencyFormatter from "../../helpers/currencyFormatter";

function TicketInfo({ ticket, shoppingCart, updateTicketAmount }) {
  const getNumberOfTickets = () => {
    return shoppingCart && shoppingCart.tickets && shoppingCart.tickets.get(ticket.type) ? shoppingCart.tickets.get(ticket.type).number : 0;
  }

  const onValueChanged = (e) => {
    var newTicketNumber = e.target.value;
    updateTicketAmount(ticket.type, ticket.cost, newTicketNumber);
  }

  return (
    <Container>
      <Row>
        <Col>
        <h4>{ticket.name}</h4>
        <div>{ticket.description}</div>
        <div>{currencyFormatter.format(ticket.cost / 100)}</div>
        </Col>
        <Col xs lg="2">
          <input type="number" min="0" className="form-control" value={getNumberOfTickets()} onChange={onValueChanged}/>
        </Col>
      </Row>
    </Container>
  );
}

export default TicketInfo;
