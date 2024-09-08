import React from "react";

const User = ({ userInfo }) => {
const clickHandler =(data)=>{
console.log("Button Clicked",data)
}

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={userInfo.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{userInfo.firstName}</h2>
        <p>{userInfo.email}</p>
        <div className="card-actions justify-end">
          <button onClick={()=>clickHandler(userInfo.firstName)} className="btn btn-primary">{userInfo.role}</button>
        </div>
      </div>
    </div>
  );
};

export default User;
