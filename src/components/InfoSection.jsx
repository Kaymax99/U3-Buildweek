import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import bg from "../assets/imgs/bg.jpg";
import { ProfileModal } from "./CustomModals";
import Experiences from "./Experiences";
import FetchExperience from "./Fetches/FetchExperience";
import {
  PersonPlusFill,
  ShieldLockFill,
  ThreeDots,
} from "react-bootstrap-icons";

const InfoSection = ({ profileData, updateData }) => {
  const [showModal, setShowModal] = useState(false);
  let profile = null;
  const personalProfile = useSelector((state) => state.profile.content);
  // setta lo stato con le esperienze
  const [experienceArray, setExperienceArray] = useState([]);
  const handleShow = () => setShowModal(true);
  const params = useParams();

  // fetch delle esperienze del profilo
  const retrieveExperiences = async (id) => {
    let experiences = await FetchExperience(id);
    // console.log("ESPERIENZE", experiences);
    setExperienceArray(experiences);
  };

  const setTargetProfile = () => {
    if (params.profileID === "me") {
      profile = { ...personalProfile };
    } else {
      profile = { ...profileData };
    }
  };
  setTargetProfile();

  const updateOnEdit = async () => {
    await updateData();
    setTargetProfile();
  };

  const updateExp = () => {
    if (profile._id) {
      retrieveExperiences(profile._id);
    }
  };

  useEffect(() => {
    updateExp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile._id]);

  return (
    <Col
      xs={12}
      md={7}
      className={"mt-3"}
      style={{ backgroundColor: "white", borderRadius: "15px" }}
    >
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
          {params.profileID === "me" ? (
            <div className="pencil-container mt-2 container-fluid">
              <div>
                <Button variant="none" onClick={handleShow} className="p-0">
                  <FaPencilAlt className="pencil fs-5" />
                </Button>
                <ProfileModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  profile={profile}
                  updateOnEdit={updateOnEdit}
                />
              </div>
            </div>
          ) : (
            <div className="mt-5"></div>
          )}
          <div className="m-3">
            <div className="name mt-4">
              <h2>
                {profile?.name} {profile?.surname}
              </h2>
            </div>
            <p>{profile?.title}</p>
            <p className="text-secondary mb-0 fs-7">{profile?.area}</p>
            <Link style={{ textDecoration: "none" }}>
              <p className="text-primary info-contatto fs-7">
                Informazioni di contatto
              </p>
            </Link>
            {params.profileID === "me" ? (
              <>
                <Button variant="primary rounded-pill py-1 px-3 text-bold me-2">
                  Disponibile per
                </Button>
                <Button variant="outline-primary rounded-pill py-1 px-3">
                  Aggiungi sezione del profilo
                </Button>
              </>
            ) : (
              <>
                <Button variant="primary rounded-pill py-1 px-3 me-2 fw-bold">
                  <PersonPlusFill className="me-1 mb-1" />{" "}
                  <span>Collegati</span>
                </Button>
                <Button variant="outline-primary rounded-pill py-1 px-3 me-2 fw-bold">
                  <ShieldLockFill className="me-1 mb-1" />
                  <span>Messaggio</span>
                </Button>
              </>
            )}
            <Button variant="outline-secondary rounded-pill py-0 px-1 py-md-1 px-md-3 fw-bold">
              <span className="d-none d-md-inline">Altro</span>{" "}
              <ThreeDots className="d-md-none mb-1" />
            </Button>
          </div>
        </div>
        <div className="rounded mt-2">
          <div className="m-3 mt-4">
            {profile?.bio ? (
              <>
                <h4>Informazioni</h4>
                <p>{profile?.bio}</p>
                <hr />
              </>
            ) : (
              ""
            )}

            <Experiences experiences={experienceArray} updateExp={updateExp} />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default InfoSection;
