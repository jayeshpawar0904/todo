import React from 'react'
import './cardstyle.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function LabelUi(props) {
  const [show, setShow] = React.useState(false);
    return (
      <div className='cs1'>
      <Card >
      <Card.Body>
      <Card.Text>
      <div className="alert alert-primary" role="alert">
      {props.exercise.username}
      </div> 
      </Card.Text>
      <a href="#" className='btn btn-outline-success' onClick={() => setShow(true)} onClick={() => { props.deleteUser(props.exercise._id) }}>delete</a>
      </Card.Body>
      </Card>

      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me ya'll!
          </Button>
        </div>
      </Alert>

      
      
      </div>
    )
}

export default LabelUi