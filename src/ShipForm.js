import { Button, Col, Form, Modal } from 'react-bootstrap'
import { useState } from 'react'

function ShipForm ({ onInputChange, addPost, show, handleClose }){
  const [validate, setValidate] = useState(false)

  const checkAndAddStarship = async e => {
    setValidate(true)
    try {
      await addPost(e)
      setValidate(false)
      handleClose()
    }
    catch (e) {
      window.alert(e)
    }
  }

  return (
    <Modal size='xl' centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Starship</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="Form">
          <Form
            validated={validate}
            style={{ width: '100%' }}>
            <Form.Row>
              <Col>
                <Form.Control required onChange={onInputChange} name="name" type="text"
                  placeholder="Enter Spaceship name" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Spaceship name.
                                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Col>
                <Form.Control required onChange={onInputChange} type="text" name="manufacturer"
                  placeholder="Enter the manufacturer name" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid manufacturer.
                                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Col>
                <Form.Control required onChange={onInputChange} type="text" name="image"
                  placeholder="Enter the image link" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid image link.
                                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />

            <Form.Row>
              <Col>
                <Form.Control required onChange={onInputChange} type="number" name="crew" min={0}
                  placeholder="Enter the number of crew" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid positive number.
                                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />

            <Form.Row>
              <Col>
                <Form.Control required onChange={onInputChange} type="number" name="passengers" min={0}
                  placeholder="Enter the number of passengers" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid positive number.
                                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />

            <Form.Row>
              <Col>
                <Form.Control required onChange={onInputChange} type="number" name="cargo_capacity" min={0}
                  placeholder="Enter the cargo capacity in kg" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid cargo capacity.
                                </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <br />
            <Col>
              <Button onClick={checkAndAddStarship} variant="primary" type="submit">
                Submit
                            </Button>
            </Col>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ShipForm;