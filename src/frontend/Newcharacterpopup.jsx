export const Popup = () =>

<div createNewCharacter>
<Button className="createNewCharacter" variant="primary" onClick={handleShow}>
  Create New Character
</Button>

<Modal className="createpopup" show={show} onHide={handleClose}>
  <Modal.Header>
    <Modal.Title>Character Creation</Modal.Title>
  </Modal.Header>
  <Modal.Body>Enter character name</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="primary" onClick={ClassSelect()}>
      Next
    </Button>
  </Modal.Footer>
</Modal>
</div>

function ClassSelect() {

}