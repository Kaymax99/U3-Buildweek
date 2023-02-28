import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
} from "react-bootstrap";
import { EditProfile } from "./Fetches/FetchProfileByID";

export const ProfileModal = ({
  showModal,
  setShowModal,
  profile,
  retrieveData,
}) => {
  const [profileData, setProfileData] = useState({
    name: "",
    surname: "",
    title: "",
    username: "",
    bio: "",
    area: "",
  });

  useEffect(() => {
    if (profile) {
      setProfileData({
        name: profile.name,
        surname: profile.surname,
        title: profile.title,
        username: profile.username,
        bio: profile.bio,
        area: profile.area,
      });
    }
  }, [profile]);

  const handleChange = (propertyName, propertyValue) => {
    setProfileData({ ...profileData, [propertyName]: propertyValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("test", profileData);
    EditProfile(profileData, retrieveData);
    handleClose();
  };

  const handleClose = () => {
    setShowModal(false);
    setProfileData({
      name: profile.name,
      surname: profile.surname,
      title: profile.title,
      username: profile.username,
      bio: profile.bio,
      area: profile.area,
    });
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit intro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup className="mb-2">
            <FormLabel>First Name</FormLabel>
            <FormControl
              type="text"
              as="textarea"
              value={profileData.name}
              placeholder="Insert your first name"
              rows="1"
              onChange={(e) => {
                handleChange("name", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type="text"
              as="textarea"
              value={profileData.surname}
              placeholder="Insert your last name"
              rows="1"
              onChange={(e) => {
                handleChange("surname", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>Headline</FormLabel>
            <FormControl
              type="text"
              as="textarea"
              value={profileData.title}
              placeholder="The headline of your profile"
              rows="1"
              onChange={(e) => {
                handleChange("title", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>Nickname</FormLabel>
            <FormControl
              type="text"
              as="textarea"
              value={profileData.username}
              placeholder="Insert your nickname"
              rows="1"
              onChange={(e) => {
                handleChange("username", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>Location</FormLabel>
            <FormControl
              type="text"
              as="textarea"
              value={profileData.area}
              placeholder="Ex. Italy"
              rows="1"
              onChange={(e) => {
                handleChange("area", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>About you</FormLabel>
            <FormControl
              type="text"
              as="textarea"
              value={profileData.bio}
              placeholder="Tell us something about you"
              rows="5"
              onChange={(e) => {
                handleChange("bio", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="rounded-pill fw-bold"
          variant="primary"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
