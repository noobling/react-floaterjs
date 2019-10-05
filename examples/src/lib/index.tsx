import React from "react";
import "./style.css";

interface Props {
  children: any;
}

function ReactFloaterJs({ children }: Props) {
  return <div className="react-floater-animated">{children}</div>;
}

export default ReactFloaterJs;
