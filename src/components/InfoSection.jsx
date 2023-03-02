import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import bg from "../assets/imgs/bg.jpg";
import { ProfileModal, ImageModal } from "./CustomModals";
import Experiences from "./Experiences";
import FetchExperience from "./Fetches/FetchExperience";
import {
  PersonPlusFill,
  ShieldLockFill,
  ThreeDots,
} from "react-bootstrap-icons";

const InfoSection = ({ profileData, updateData }) => {
  const [experienceArray, setExperienceArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleShowImageModal = () => setShowImageModal(true);

  let profile = null;
  const personalProfile = useSelector((state) => state.profile.content);

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
  console.log(profile);

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
    <Col xs={12} md={7} className={"mt-3"}>
      <div>
        <div className="d-flex flex-column profSection">
          <div className="background">
            <img src={bg} alt="" className="img-fluid bgImgProf" />
            <img
              src={profile?.image}
              alt="profile_img"
              className="profile_img"
            />
          </div>
          {params.profileID === "me" ? (
            <div className="pencil-container mt-2 container-fluid">
              <Button variant="none" onClick={handleShowImageModal}>
                <MdPhotoCamera className="fs-4" />{" "}
              </Button>
              <ImageModal
                idProfile={profile._id}
                showModal={showImageModal}
                setShowModal={setShowImageModal}
              />
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
            <Link>
              <p className="text-primary info-contatto fs-7">
                Informazioni di contatto
              </p>
            </Link>
            {params.profileID === "me" ? (
              <>
                <Button variant="primary rounded-pill py-1 px-3 fw-bold me-2 fs-7">
                  Disponibile per
                </Button>
                <Button variant="outline-primary rounded-pill py-1 px-3 fw-bold me-2 fs-7">
                  Aggiungi sezione del profilo
                </Button>
              </>
            ) : (
              <>
                <Button variant="primary rounded-pill py-1 px-3 me-2 fw-bold fs-7">
                  <PersonPlusFill className="me-1 mb-1" />{" "}
                  <span>Collegati</span>
                </Button>
                <Button variant="outline-primary rounded-pill py-1 px-3 me-2 fw-bold fs-7">
                  <ShieldLockFill className="me-1 mb-1" />
                  <span>Messaggio</span>
                </Button>
              </>
            )}
            <Button variant="outline-secondary rounded-pill py-0 px-1 py-md-1 px-md-3 fw-bold fs-7">
              <span className="d-none d-md-inline">Altro</span>{" "}
              <ThreeDots className="d-md-none mb-1" />
            </Button>
          </div>
        </div>
        <div className="rounded mt-2">
          <div className="mt-2">
            {profile?.bio ? (
              <div className="profSection py-3 px-4">
                <h4>Informazioni</h4>
                <p className="m-0 fs-7">{profile?.bio}</p>
              </div>
            ) : (
              ""
            )}
            <div className="profSection expSection p-3 mt-2">
              <Experiences
                experiences={experienceArray}
                updateExp={updateExp}
              />
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default InfoSection;
