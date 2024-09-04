import { useEffect } from "react";

const LoadUser = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [1]);
  return <div>LoadUser</div>;
};

export default LoadUser;
