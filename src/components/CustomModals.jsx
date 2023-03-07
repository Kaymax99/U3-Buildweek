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
import { EditProfile, EditProfilePhoto } from "./Fetches/EditProfile";
import { DeleteExperience } from "./Fetches/DeleteExperience";
import {
  EditExperienceImage,
  FetchExperience,
} from "./Fetches/FetchExperience";
import { GetComments, PostComments } from "./Fetches/FetchComments";
import { DELETE, PUT } from "../redux/actions";

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

  const [experienceId, setExperienceId] = useState();

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
  const [formData, setFormData] = useState(new FormData());

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();

    if (edit) {
      await EditExperience(
        experience.user,
        experience._id,
        "PUT",
        expData,
        updateExp
      );

      EditExperienceImage(userID, formData, experience._id);
    } else {
      let ex = await EditExperience(
        experience.user,
        "",
        "POST",
        expData,
        updateExp
      );
      // await FetchExperience(userID);

      await EditExperienceImage(experience.user, formData, ex._id);
      window.location.reload();
      // let experiences = await FetchExperience(userID);
      // let lastindex = experiences.length - 1
    }

    // console.log(
    //   "return di EditExperienceImage:",
    //   await EditExperienceImage(userID, formData, experience._id)
    // );
  };

  // handleFile per l'immagine del post

  const handleFile = (ev) => {
    setFormData((prev) => {
      prev.delete("experience");
      prev.append("experience", ev.target?.files[0]);
      return prev;
    });
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{edit ? "Edit Experience" : "Add Experience"}</Modal.Title>
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
              value={expData?.startDate.slice(0, 10)}
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
              value={expData?.endDate?.slice(0, 10)}
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
            <Form.Label>Aggiungi Immagine</Form.Label>
            <Form.Control type="file" onChange={handleFile}></Form.Control>
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

// MODALE PER L'IMMAGINE DEL PROFILO
export const ImageModal = (props) => {
  const handleClose = () => {
    props.setShowModal(false);
  };

  const [fd, setFd] = useState(new FormData());

  const handleFile = (ev) => {
    setFd((prev) => {
      prev.delete("profile");
      prev.append("profile", ev.target?.files[0]);
      return prev;
    });
  };

  const sendPicture = async () => {
    await EditProfilePhoto(props.idProfile, fd);
  };

  const handleSubmit = () => {
    sendPicture();
    setInterval(() => {
      handleClose();
      window.location.reload();
    }, 100);
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

export const CommentModal = ({
  showModal,
  setShowModal,
  comment,
  retrieveData,
}) => {
  const handleClose = () => {
    setShowModal(false);
  };
  const [newComment, setNewComment] = useState({
    comment: "",
  });

  useEffect(() => {
    if (comment) {
      setNewComment({
        comment: comment?.comment,
      });
    }
  }, [comment]);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <FormControl
              type="text"
              as="textarea"
              value={newComment?.comment}
              rows="1"
              onChange={(e) => {
                handleChange(
                  setNewComment,
                  newComment,
                  "comment",
                  e.target.value
                );
              }}
            ></FormControl>
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button
          variant="danger"
          onClick={async () => {
            handleClose();
            await GetComments(comment._id, DELETE);
            retrieveData();
          }}
        >
          Delete
        </Button>
        <Button
          variant="primary"
          onClick={async (e) => {
            e.preventDefault();
            handleClose();
            await PostComments(newComment, PUT, comment._id);
            retrieveData();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
