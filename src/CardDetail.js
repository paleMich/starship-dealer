import { Modal } from 'react-bootstrap'

export default ({ show, handleClose, starship }) => {
  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {starship.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <p><b>Crew:</b> {starship.crew}</p>
          <p><b>passengers:</b> {starship.passengers}</p>
          <p><b>Cargo Capacity:</b> {starship.cargo_capacity}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}