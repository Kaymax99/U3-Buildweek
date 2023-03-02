import React, { useState } from "react";
import { addPost } from "../Fetches/FetchPosts";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Image } from "react-bootstrap";
import "./CreaUnPost.css";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsFillPlayBtnFill, BsCalendarEvent } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";

function CreaUnPost() {
  const [show, setShow] = useState(false);
  const [postText, setPostText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
          "Content-type": "application/json",
        },
        body: JSON.stringify({ text: postText }),
      });
      if (response.ok) {
        console.log("Post added successfully!");
        setShow(false);
      } else {
        console.log("Response is not OK", response.status);
      }
    } catch (error) {
      console.log("ERRORE CATCH", error);
    }
  };

  return (
    <>
      <div className="ContenitorePrincipalePost">
        <Row xs={12} className="my-2 d-flex">
          <Col xs={2}>
            <Image className="PostProfileImage" src="https://placekitten.com/100/100" alt="" />
          </Col>
          <Col xs={10} className="">
            <Button className="PostButton" onClick={handleShow}>
              Avvia un post
            </Button>
          </Col>
        </Row>
        [12:25]
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
              <RiArticleFill className="text-danger post_icons" /> Scrivi un Articolo
            </Button>
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Di cosa vorresti parlare?</Form.Label>
              <Form.Control as="textarea" rows={3} value={postText} onChange={(e) => setPostText(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="PostButton" onClick={handleSubmit}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CreaUnPost;
