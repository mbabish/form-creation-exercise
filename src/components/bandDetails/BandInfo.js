import Card from 'react-bootstrap/Card';
import DOMPurify from 'dompurify';

function BandInfo({ band }) {

  let cleanDescription = DOMPurify.sanitize(band.description_blurb, { USE_PROFILES: { html: true } });

  return (
    <Card>
      <Card.Img variant="top" src={band.imgUrl} />
      <Card.Body>
        <Card.Text dangerouslySetInnerHTML={{ __html: cleanDescription }} />
      </Card.Body>
    </Card>
  );
}

export default BandInfo;
