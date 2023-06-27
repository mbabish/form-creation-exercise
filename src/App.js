import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import BandForm from "./components/BandForm";

function App() {
  const [bandIndex, setBandIndex] = useState(0);

  const bands = [skaBand, kpopBand, punkBand];
  const onSelectBand = (e) => {
    setBandIndex(e.target.value);
  }

  return (
    <Container>
      <Row>
        <h2>Select a band</h2>
        <Form.Select onChange={onSelectBand}>
          <option value="0">Ska Band</option>
          <option value="1">K-Pop Band</option>
          <option value="2">Punk Band</option>
        </Form.Select>
      </Row>
      <Row>
        <hr className="divider"/>
      </Row>
      <Row>
        <BandForm band={bands[bandIndex]} />
      </Row>
    </Container>
  );
}

export default App;
