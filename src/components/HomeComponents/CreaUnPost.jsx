import React, { useState } from "react";
import { addPost, addPostImage } from "../Fetches/FetchPosts";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Image, Container } from "react-bootstrap";

import { HiOutlinePhotograph } from "react-icons/hi";
import { BsFillPlayBtnFill, BsCalendarEvent } from "react-icons/bs";
import { RiArticleFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import unRegistered from "../../assets/imgs/unregistered.png";

export const CreaUnPost = ({ retrievePosts }) => {
  const profile = useSelector((state) => state.profile.content);
  const [show, setShow] = useState(false);
  const [postText, setPostText] = useState("");
  const [formData, setFormData] = useState(new FormData());
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    let res = await addPost({ text: postText });

    if (res.hasError) {
      setErrorMessage(res.message);
    } else {
      setErrorMessage("");
      setShow(false);

      //verifica se presente immagine da caricare
      if (formData.get("post")) {
        addPostImage(res._id, formData);
      }
      retrievePosts();
      setTimeout(() => {
        alert("Much wow, very post. Will be visible in a couple of seconds");
      }, 100);
    }
  };

  const handleFile = async (ev) => {
    setFormData((prev) => {
      prev.delete("post");
      prev.append("post", ev.target.files[0]);
      return prev;
    });
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
            <Button
              className="PostButton justify-content-start"
              onClick={handleShow}
            >
              Avvia un post
            </Button>
          </Col>
        </Row>
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
                onChange={(e) => {
                  setPostText(e.target.value);
                  setErrorMessage("");
                }}
              />
              <Form.Label>Aggiungi Immagine</Form.Label>
              <Form.Control type="file" onChange={handleFile}></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Col xs={3}>
            <Button className="PostButton" onClick={handleSubmit}>
              Pubblica
            </Button>
          </Col>
          {errorMessage && (
            <Col xs={12} className="alert alert-danger" role="alert">
              {errorMessage}
            </Col>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
