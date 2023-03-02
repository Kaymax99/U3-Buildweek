import React, { useState } from "react";
import { addPost} from "../Fetches/FetchPosts";


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Image, Container } from "react-bootstrap";

import { HiOutlinePhotograph } from "react-icons/hi";
import { BsFillPlayBtnFill, BsCalendarEvent } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import unRegistered from "../../assets/imgs/unregistered.png";

function CreaUnPost() {
  const [show, setShow] = useState(false);
  const profile = useSelector((state) => state.profile.content);
  const [postText, setPostText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
            "Content-type": "application/json",
          },
          body: JSON.stringify({ text: postText }),
        }
      );
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
      <div className="ContenitorePrincipalePost mb-3">
        <Row xs={12} className="my-2 d-flex">
          <Col xs={2}>
            <Image
              className="PostProfileImage"
              src={profile?.image ? profile.image : unRegistered}
              alt=""
            />
          </Col>
          <Col xs={10}>
            <Button className="PostButton" onClick={handleShow}>
              Avvia un post
            </Button>
          </Col>
        </Row>
        {/* <Row xs={12} className="BottomButtons">
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
        </Row> */}
        <Container className="BottomButtons">
          <Button className="PostButtons">
            <HiOutlinePhotograph className="text-primary post_icons" /> Foto
          </Button>
          <Button className="PostButtons">
            <BsFillPlayBtnFill className="text-success post_icons" /> Video
          </Button>
          <Button className="PostButtons">
            <BsCalendarEvent className="text-warning post_icons" /> Evento
          </Button>
          <Button className="PostButtons d-block">
            <RiArticleFill className="text-danger post_icons" /> Scrivi un
            Articolo
          </Button>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Di cosa vorresti parlare?</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
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
