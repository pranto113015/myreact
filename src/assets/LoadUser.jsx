import { useEffect } from "react";

const LoadUser = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [1]);
  return <div className="text-rose-500 text-4xl">LoadUser</div>;
};

export default LoadUser;
