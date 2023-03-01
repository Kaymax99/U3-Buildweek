import { Container, Row } from "react-bootstrap";
import InfoSection from "./InfoSection";
import PeopleSection from "./PeopleSection";
import { useParams } from "react-router";
import { FetchProfileByID } from "./Fetches/FetchProfileByID";
import { useEffect, useState } from "react";

export const Profile = () => {
  // setta lo stato del profilo
  const [profile, setProfile] = useState(null);
  // setta lo stato con lista di profili
  const [profileArray, setProfileArray] = useState([]);
  // useParams per prendere l'id dinamico dalla pagina
  const params = useParams();

  // fetch del singolo profilo
  const retrieveData = async () => {
    let data = await FetchProfileByID(params.profileID);
    let profiles = await FetchProfileByID("");
    setProfile(data);
    setProfileArray(profiles);
    // console.log(profile);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    retrieveData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-between">
          <InfoSection profile={profile} retrieveData={retrieveData} />
          <PeopleSection profileArray={profileArray.slice(0, 5)} />
        </Row>
      </Container>
    </>
  );
};

export default Profile;
