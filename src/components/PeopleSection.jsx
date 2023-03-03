import { useSelector } from "react-redux";
import People from "./People";
import { randomizeArray } from "../hooks/randomizeArray";
import { Spinner } from "react-bootstrap";

export const PeopleSection = () => {
  const peopleArray = useSelector((state) => state.people.content);
  const profileArray = randomizeArray(peopleArray).slice(0, 5);
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
