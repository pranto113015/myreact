import { useState } from "react";

const Counter = () => {
  const [myData, setMyData] = useState(0);

  const mystyle = {
    border: "1px solid red",
    backgroundColor: "green",
    color: "white",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "10px",
  };

  const changeData = () => {
    setMyData(myData+1);
  };
  return (
    <div style={mystyle}>
      <h1>Counter : {myData}</h1>
      <button onClick={changeData}>update</button>
    </div>
  );
};

export default Counter;
