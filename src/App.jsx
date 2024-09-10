import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
console.log(users)
  return (
    <>
    <div className="d-flex gap-3 flex-wrap justify-content-center">
    {users.map((user) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.image} />
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text>
             {user.university}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))} 
    </div>
    </>
  );
}
