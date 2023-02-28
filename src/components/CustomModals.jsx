import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
} from "react-bootstrap";
import { EditExperience } from "./Fetches/EditExperience";
import { EditProfile } from "./Fetches/EditProfile";
import { DeleteExperience } from "./Fetches/DeleteExperience";

const handleChange = (setData, data, propertyName, propertyValue) => {
  setData({ ...data, [propertyName]: propertyValue });
};

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
                handleChange(
                  setProfileData,
                  profileData,
                  "name",
                  e.target.value
                );
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
                handleChange(
                  setProfileData,
                  profileData,
                  "surname",
                  e.target.value
                );
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
                handleChange(
                  setProfileData,
                  profileData,
                  "title",
                  e.target.value
                );
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
                handleChange(
                  setProfileData,
                  profileData,
                  "username",
                  e.target.value
                );
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
                handleChange(
                  setProfileData,
                  profileData,
                  "area",
                  e.target.value
                );
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
                handleChange(
                  setProfileData,
                  profileData,
                  "bio",
                  e.target.value
                );
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

export const ExperienceModal = ({
  showModal,
  setShowModal,
  experience,
  edit,
  userID,
  retrieveData,
}) => {
  const [expData, setExpData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    if (experience) {
      setExpData({
        role: experience?.role,
        company: experience?.company,
        startDate: experience?.startDate,
        endDate: experience?.endDate,
        description: experience?.description,
        area: experience?.area,
      });
    }
  }, [experience]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    if (edit) {
      EditExperience(
        experience.user,
        experience._id,
        "PUT",
        expData,
        retrieveData
      );
    } else {
      EditExperience(userID, "", "POST", expData, retrieveData);
    }
  };

  const testFn = () => {
    DeleteExperience(userID, experience._id, retrieveData);
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup className="mb-2">
            <FormLabel>Title</FormLabel>
            <FormControl
              type="text"
              as="textarea"
              value={expData?.role}
              placeholder="Insert your role in the company"
              rows="1"
              onChange={(e) => {
                handleChange(setExpData, expData, "role", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>Company name</FormLabel>
            <FormControl
              type="text"
              as="textarea"
              value={expData?.company}
              placeholder="Insert the name of the company"
              rows="1"
              onChange={(e) => {
                handleChange(setExpData, expData, "company", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>Location</FormLabel>
            <FormControl
              type="text"
              as="textarea"
              value={expData?.area}
              placeholder="Insert the location"
              rows="1"
              onChange={(e) => {
                handleChange(setExpData, expData, "area", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>Start date</FormLabel>
            <FormControl
              type="date"
              rows="1"
              onChange={(e) => {
                handleChange(setExpData, expData, "startDate", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>End date (leave blank if current)</FormLabel>
            <FormControl
              type="date"
              rows="1"
              onChange={(e) => {
                handleChange(setExpData, expData, "endDate", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>Description</FormLabel>
            <FormControl
              type="text"
              as="textarea"
              value={expData?.description}
              placeholder="Insert the location"
              rows="5"
              onChange={(e) => {
                handleChange(
                  setExpData,
                  expData,
                  "description",
                  e.target.value
                );
              }}
            ></FormControl>
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        {edit ? (
          <Button
            className="rounded-pill fw-bold"
            variant="danger"
            onClick={testFn}
          >
            Delete experience
          </Button>
        ) : (
          <div></div>
        )}

        <Button
          className="rounded-pill fw-bold align-self-end"
          variant="primary"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
