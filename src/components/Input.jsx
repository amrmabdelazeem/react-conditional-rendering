import React from "react";

function Input(props) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} />
      {/* <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" /> */}
    </div>
  );
}

export default Input;
