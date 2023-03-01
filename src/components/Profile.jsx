import { Container, Row } from "react-bootstrap";
import InfoSection from "./InfoSection";
import PeopleSection from "./PeopleSection";
import { useParams } from "react-router";
import { FetchProfileByID } from "./Fetches/FetchProfileByID";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProfileAction, GET_PROFILE } from "../redux/actions";

export const Profile = () => {
  // setta lo stato del profilo
  const [profileData, setProfileData] = useState(null);
  // useParams per prendere l'id dinamico dalla pagina
  const params = useParams();
  const dispatch = useDispatch();

  // fetch del singolo profilo
  const retrieveData = async () => {
    if (params.profileID !== "me") {
      let data = await FetchProfileByID(params.profileID);
      setProfileData(data);
    }
    // console.log(profile);
  };

  const updateData = async () => {
    if (params.profileID === "me") {
      dispatch(getProfileAction(params.profileID, GET_PROFILE));
    } else {
      let data = await FetchProfileByID(params.profileID);
      setProfileData(data);
    }
  };

  useEffect(() => {
    retrieveData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.profileID]);

  return (
    <>
      <Container>
        <Row className="justify-content-evenly">
          <InfoSection profileData={profileData} updateData={updateData} />
          <PeopleSection />
        </Row>
      </Container>
    </>
  );
};
