import { Container, Row } from "react-bootstrap";
import InfoSection from "./InfoSection";
import PeopleSection from "./PeopleSection";
import { useParams } from "react-router";
import FetchProfileByID from "./FetchProfileByID";
import { useEffect, useState } from "react";

export const Profile = () => {
  const [profile, setProfile] = useState({});
  const [profileArray, setProfileArray] = useState([]);
  const params = useParams();
  const retrieveData = async () => {
    let data = await FetchProfileByID(params.profileID);
    let profiles = await FetchProfileByID("");
    setProfile(data);
    setProfileArray(profiles);
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
          <PeopleSection profileArray={profileArray.slice(0, 5)} />
        </Row>
      </Container>
    </>
  );
};

export default Profile;
