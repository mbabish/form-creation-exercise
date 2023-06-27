import ListGroup from 'react-bootstrap/ListGroup';

import TotalCost from './TotalCost';
import ContactInfo from './ContactInfo';
import CreditCardInfo from './CreditCardInfo';

function CheckoutForm(totalCost) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <TotalCost totalCost={totalCost.totalCost.cost} />
      </ListGroup.Item>
      <ListGroup.Item>
        <ContactInfo />
        <CreditCardInfo />
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CheckoutForm;
