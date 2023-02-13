import { useState } from "react";
import '../tutorial.css'

import Modal from "react-bootstrap/Modal";

export const Tutorial = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <>
        <button className="add-button" onClick={() => setShow(!show)}>
        Tutorial
      </button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>How to create a D&D Character.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>Step 1: Click on the create New Character button.</div>
            <div>Step 2: Follow the steps by choosing a Name and Race. </div>
            <div>Step 3: Choose your Class.</div>
            <div>Step 4: Determine your ability Scores. Note: Some races have postive and Negative Values.</div>
            <div>Step 5: Describe your Characters Look and Background.</div>
            <div>Step 6: Choose your starting Equipment.</div>
            <div>THATS IT!!! You have created your own Character, enjoy playing!</div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default Tutorial;