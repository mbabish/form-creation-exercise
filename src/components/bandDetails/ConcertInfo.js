import * as moment from 'moment';

import Alert from 'react-bootstrap/Alert';
import Icon from './../Icon';

function ConcertInfo({ band }) {

  let concertDate = moment(band.date).format('dddd, MMMM D, YYYY');

  return (
    <>
      <Alert variant="light"><Icon iconName="calendar"/>{ concertDate }</Alert>
      <Alert variant="light"><Icon iconName="location"/>{ band.location }</Alert>
    </>
  );
}

export default ConcertInfo;
