import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { FindById } from "../utils/CRUDHandler";

export default function Card() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      const post = await FindById(2);
      setPost(post);
      console.log(post);
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  return (
    <div>
      <MDBCard>
        <MDBCardHeader>{post.title}</MDBCardHeader>
        <MDBListGroup>
          <MDBListGroupItem>{post.body}</MDBListGroupItem>
          <MDBListGroupItem>{post.id}</MDBListGroupItem>
          <MDBListGroupItem>{post.userId}</MDBListGroupItem>
        </MDBListGroup>
      </MDBCard>
    </div>
  );
}
