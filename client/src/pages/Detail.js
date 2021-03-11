import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";

function Detail(props) {
  const [rsvp, setRsvp] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getRsvp(id)
      .then(res => setRsvp(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <div>
        {/* <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {book.title} by {book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row> */}
      </div>
    );
  }


export default Detail;
