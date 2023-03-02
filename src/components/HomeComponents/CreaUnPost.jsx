import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Image } from "react-bootstrap";

import { HiOutlinePhotograph } from "react-icons/hi";
import { BsFillPlayBtnFill, BsCalendarEvent } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import unRegistered from "../../assets/imgs/unregistered.png";

function CreaUnPost() {
  const [show, setShow] = useState(false);
  const profile = useSelector((state) => state.profile.content);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="ContenitorePrincipalePost mb-3">
        <Row xs={12} className="my-2 d-flex">
          <Col xs={2}>
            <Image
              className="PostProfileImage"
              src={profile?.image ? profile.image : unRegistered}
              alt=""
            />
          </Col>
          <Col xs={10} className="">
            <Button className="PostButton" onClick={handleShow}>
              Avvia un post
            </Button>
          </Col>
        </Row>

        <Row xs={12} className="BottomButtons">
          <Col md={3}>
            <Button className="PostButtons">
              <HiOutlinePhotograph className="text-primary post_icons" /> Foto
            </Button>
          </Col>
          <Col md={3}>
            <Button className="PostButtons">
              <BsFillPlayBtnFill className="text-success post_icons" /> Video
            </Button>
          </Col>
          <Col md={3}>
            <Button className="PostButtons">
              <BsCalendarEvent className="text-warning post_icons" /> Evento
            </Button>
          </Col>
          <Col xs={12} md={3}>
            <Button className="PostButtons">
              <RiArticleFill className="text-danger post_icons" /> Scrivi un
              Articolo
            </Button>
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            ></Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Di cosa vorresti parlare?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="PostButton" onClick={handleClose}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CreaUnPost;
