import React from "react";

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} />;

  /*
  return
  <input type="text" placeholder="Username" />;
  <input type="password" placeholder="Password" />;*/
}

export default Input;
