import { Col, Row } from "react-bootstrap";
import unregistered from "../../assets/imgs/unregistered.png";
import { transformToDate } from "../../hooks/formatDate";

const SingleComment = ({ comment }) => {
  // console.log(comment);
  return (
    <>
      <Col xs={2}>
        <img src={unregistered} alt="" className="PostProfileImage" />
      </Col>
      <Col xs={10}>
        <div className="single_comment_container px-3 mb-3 pb-2">
          <Row className="justify-content-between mb-3">
            <Col xs={8} className="mt-2 fw-bold">
              {comment.author}
            </Col>
            <Col xs={4} className="mt-2 text-secondary">
              {transformToDate(comment.createdAt)}
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="testo_commento">{comment.comment}</p>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
};

export default SingleComment;
