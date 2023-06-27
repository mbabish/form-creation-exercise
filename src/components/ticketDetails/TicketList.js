import ListGroup from 'react-bootstrap/ListGroup';

import TicketInfo from './TicketInfo';

function TicketList({ ticketTypes, shoppingCart, updateTicketAmount}) {
  return (
    <ListGroup>
      {ticketTypes.map((ticket) => (
        <ListGroup.Item key={ticket.type}>
          <TicketInfo ticket={ticket} shoppingCart={shoppingCart} updateTicketAmount={updateTicketAmount} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TicketList;
