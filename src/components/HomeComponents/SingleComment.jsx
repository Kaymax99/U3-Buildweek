import { Button, Col, Row } from "react-bootstrap";
import unregistered from "../../assets/imgs/unregistered.png";
import { transformToDate } from "../../hooks/formatDate";
import { FaPencilAlt } from "react-icons/fa";
import { CommentModal } from "../CustomModals";
import { useState } from "react";

const SingleComment = ({ comment, retrieveData }) => {
  const [showModal, setShowModal] = useState(false);
  // console.log(comment);
  const handleShow = () => setShowModal(true);
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
            <Col
              xs={4}
              className="mt-2 text-secondary d-flex align-items-center"
            >
              {transformToDate(comment.createdAt)}

              <Button variant="none" onClick={handleShow} className="py-0">
                <FaPencilAlt />
              </Button>
              <CommentModal
                showModal={showModal}
                setShowModal={setShowModal}
                comment={comment}
                retrieveData={retrieveData}
              />
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
