import { useSelector } from "react-redux";
import People from "./People";
import { randomizeArray } from "../hooks/randomizeArray";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PeopleSection = () => {
  const peopleArray = useSelector((state) => state.people.content);
  const [profileArray, setProfileArray] = useState([]);

  const params = useParams();

  useEffect(() => {
    const arrayCopy = [...peopleArray];
    setProfileArray(randomizeArray(arrayCopy).slice(0, 5));
  }, [params.profileID]);

  return (
    <div className="profSection">
      <h5 className="mt-4 ps-3 mb-0">Persone che potresti conoscere</h5>

      {profileArray?.length > 0 ? (
        profileArray.map((element, i) => (
          <People key={"people-" + i} singleProfile={element} />
        ))
      ) : (
        <div className="text-center my-5">
          <Spinner variant="primary" />
        </div>
      )}
    </div>
  );
};
