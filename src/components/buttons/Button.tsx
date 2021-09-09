import React from "react";
import "./button.scss";

// With typescript an interface with the props types is needed to pass props. Without this it will throw an error.
interface btnProps {
  btnType: String;
  btnContent: any;
  btnColor: String;
}

export default function Button(props: btnProps) {
  return (
    <button className={`${props.btnType} ${props.btnColor}`}>{props.btnContent}</button>
  );
}
