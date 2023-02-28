import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg from "../assets/imgs/bg.jpg";
import { ProfileModal } from "./CustomModals";
import Experiences from "./Experiences";
import FetchExperience from "./Fetches/FetchExperience";

const InfoSection = ({ profile, retrieveData }) => {
  const [showModal, setShowModal] = useState(false);
  // setta lo stato con le esperienze
  const [experienceArray, setExperienceArray] = useState([]);
  const handleShow = () => setShowModal(true);

  // fetch delle esperienze del profilo
  const retrieveExperiences = async (id) => {
    let experiences = await FetchExperience(id);
    // console.log("ESPERIENZE", experiences);
    setExperienceArray(experiences);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (profile) {
      retrieveExperiences(profile._id);
    }
  }, [profile]);

  return (
    <Col xs={12} md={8} className={"mt-3"}>
      <div>
        <div className="d-flex flex-column rounded">
          <div className="background">
            <img src={bg} alt="" className="img-fluid" />
            <img
              src={profile?.image}
              alt="profile_img"
              className="profile_img"
            />
          </div>
          <div className="pencil-container mt-2 container-fluid">
            <div>
              <Button variant="none" onClick={handleShow} className="p-0">
                <FaPencilAlt className="pencil fs-5" />
              </Button>
              <ProfileModal
                showModal={showModal}
                setShowModal={setShowModal}
                profile={profile}
                retrieveData={retrieveData}
              />
            </div>
          </div>
          <div className="m-3">
            <div className="name mt-4">
              <h2>
                {profile?.name} {profile?.surname}
              </h2>
            </div>
            <p>{profile?.title}</p>
            <p className="text-secondary">{profile?.area}</p>
            <Link style={{ textDecoration: "none" }}>
              <p className="text-primary info-contatto">
                Informazioni di contatto
              </p>
            </Link>
            <Button variant="primary rounded-pill px-4">Disponibile per</Button>
            <Button variant="outline-primary rounded-pill ms-2 px-4">
              Aggiungi sezione del profilo
            </Button>
            <Button variant="outline-secondary rounded-pill ms-2 px-4">
              Altro
            </Button>
          </div>
        </div>
        <div className="rounded mt-2">
          <div className="m-3 mt-4">
            <h4>Informazioni</h4>
            <p>{profile?.bio}</p>
            <hr />
            <Experiences
              experiences={experienceArray}
              fetchExp={retrieveExperiences}
            />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default InfoSection;
