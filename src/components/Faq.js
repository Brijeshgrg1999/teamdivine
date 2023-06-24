import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function Faq() {
  return (
    <Accordion classname="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do i enroll ? </Accordion.Header>
        <Accordion.Body>
            <p>
                Please contact our team member ( ) or you can visit <Link to='/enroll'>here </Link>
            </p>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
      
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Faq;