import { Button, Col, Row } from "react-bootstrap";
import { PersonPlusFill } from "react-bootstrap-icons";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import noPic from "../assets/imgs/unregistered.png";
import { addToFriendsAction, removeFromFriendsAction } from "../redux/actions";

const People = ({ singleProfile }) => {
  const friends = useSelector((state) => state.friends.content);
  const dispatch = useDispatch();

  const connectFn = () => {
    dispatch(addToFriendsAction(singleProfile));
  };
  const disconnectFn = () => {
    dispatch(removeFromFriendsAction(singleProfile));
  };
  return (
    <>
      <Row className="person mt-3 mx-3">
        <Col xs={3} className="text-center px-0">
          <img
            src={singleProfile?.image ? singleProfile?.image : noPic}
            alt="person"
            className="people_img"
          />
        </Col>
        <Col xs={9} className="px-0">
          <Link to={`/` + singleProfile._id}>
            <h5>
              {singleProfile.name
                ? singleProfile.surname
                  ? singleProfile.name + " " + singleProfile.surname
                  : singleProfile.name
                : "Unknown User"}
            </h5>
          </Link>
          <p className="mb-1">{singleProfile.title}</p>
          {friends.findIndex((person) => person._id === singleProfile._id) ===
          -1 ? (
            <Button
              variant="primary rounded-pill px-3 py-1 mb-3 fw-bold fs-7"
              onClick={connectFn}
            >
              <PersonPlusFill className="me-1 mb-1" />
              <span>Collegati</span>
            </Button>
          ) : (
            <Button
              variant="outline-primary rounded-pill px-3 py-1 mb-3 fw-bold fs-7"
              onClick={disconnectFn}
            >
              ✔<span>Collegato</span>
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
};

export default People;
