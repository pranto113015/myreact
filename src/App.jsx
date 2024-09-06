import { useEffect, useState } from "react";
import User from "./User";

export default function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data.users));
  }, []);
  console.log(user);
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {user.map((user) => (
        <User key={user.id} userInfo={user} />
      ))}
    </div>
  );
}
