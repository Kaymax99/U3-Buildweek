import { Container, Row } from "react-bootstrap";
import InfoSection from "./InfoSection";
import PeopleSection from "./PeopleSection";
import { useParams } from "react-router";
import FetchProfileByID from "./FetchProfileByID";
import { useEffect, useState } from "react";

export const Profile = () => {
  const [profile, setProfile] = useState({});
  const params = useParams();
  const retrieveData = async () => {
    let data = await FetchProfileByID(params.profileID);
    setProfile(data);
    console.log(profile);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <InfoSection profile={profile} />
          <PeopleSection />
        </Row>
      </Container>
    </>
  );
};

export default Profile;
