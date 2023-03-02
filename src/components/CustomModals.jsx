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
  updateOnEdit,
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
    EditProfile(profileData, updateOnEdit);
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
  updateExp,
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
        updateExp
      );
    } else {
      EditExperience(userID, "", "POST", expData, updateExp);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <p className="text-muted">* Indicates required</p>
          <FormGroup className="mb-2">
            <FormLabel>Title*</FormLabel>
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
            <FormLabel>Company name*</FormLabel>
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
            <FormLabel>Location*</FormLabel>
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
            <FormLabel>Start date*</FormLabel>
            <FormControl
              type="date"
              rows="1"
              onChange={(e) => {
                handleChange(setExpData, expData, "startDate", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>End date</FormLabel>
            <FormControl
              type="date"
              rows="1"
              onChange={(e) => {
                handleChange(setExpData, expData, "endDate", e.target.value);
              }}
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-2">
            <FormLabel>Description*</FormLabel>
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
            onClick={(e) => {
              e.preventDefault();
              DeleteExperience(userID, experience._id, updateExp);
              handleClose();
            }}
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

// MODALE PER L'IMMAGINE
export const ImageModal = (props) => {
  const handleClose = () => {
    props.setShowModal(false);
  };

  const [fd, setFd] = useState(new FormData());

  const handleFile = (ev) => {
    setFd((prev) => {
      prev.append("profile", ev.target?.file?.[0]);
      prev.delete("profile");
      return prev;
    });
  };

  const sendPicture = async () => {
    try {
      let res = await fetch(
        `https://striveschool-api.herokuapp.com/api/63fc76b3f193e60013807f5c/picture`,
        {
          method: "POST",
          body: fd,
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_MYTOKEN,
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        console.log(data);
      } else {
        console.log("ATTENZIONE! ", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPicture();
  };

  return (
    <>
      <Modal show={props.showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cambia l'immagine profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="file" onChange={handleFile} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
