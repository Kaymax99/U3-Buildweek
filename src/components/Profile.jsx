import { Container, Row } from "react-bootstrap";
import InfoSection from "./InfoSection";
import PeopleSection from "./PeopleSection";
import { useParams } from "react-router";
import FetchExperience from "./FetchExperience";
import { FetchProfileByID } from "./FetchProfileByID";
import { useEffect, useState } from "react";

export const Profile = () => {
  // setta lo stato del profilo
  const [profile, setProfile] = useState({});
  // setta lo stato con lista di profili
  const [profileArray, setProfileArray] = useState([]);
  // setta lo stato con le esperienze
  const [experienceArray, setExperienceArray] = useState([]);
  // useParams per prendere l'id dinamico dalla pagina
  const params = useParams();

  // fetch del singolo profilo
  const retrieveData = async () => {
    let data = await FetchProfileByID(params.profileID);
    let profiles = await FetchProfileByID("");
    setProfile(data);
    setProfileArray(profiles);
    console.log(profile);
  };

  // fetch delle esperienze del profilo
  const retrieveExperiences = async () => {
    let experiences = await FetchExperience(params.profileID);
    console.log("ESPERIENZE", experiences);
    setExperienceArray(experiences);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    retrieveData();
    retrieveExperiences();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <InfoSection
            profile={profile}
            experiencesProp={experienceArray}
            retrieveData={retrieveData}
          />
          <PeopleSection profileArray={profileArray.slice(0, 5)} />
        </Row>
      </Container>
    </>
  );
};

export default Profile;
