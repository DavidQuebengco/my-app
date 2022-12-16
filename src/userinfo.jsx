import React, { useState } from "react";
import { Card,Col,} from "react-bootstrap";

function UserInfo() {
  const [user, setUser] = useState({
    name: "Name Name",
    email: "Name@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  });
  return (
  
      <div>
        <Card>
          <Card.Header><strong>{user.name}</strong></Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
              <strong>Email:</strong> {user.email}
              </p>
              <p>
               <strong>Bio:</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aut aperiam soluta aliquam vero illo fugit ullam modi sunt? Minus ab provident perspiciatis sit! Inventore dolorem accusamus velit debitis necessitatibus.
              </p>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

  )

}


export default UserInfo;