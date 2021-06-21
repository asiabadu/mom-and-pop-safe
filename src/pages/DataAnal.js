import React from "react";
import Nav from "../components/Nav";
import { Redirect } from "react-router-dom";
import { useAuth } from "../firebase/auth";

function DataAnal() {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="DataAnal">
      <Nav></Nav>
      <iframe
        src="https://trinket.io/embed/python/9dc6feda15"
        width="100%"
        height="600"
        frameBorder="0"
        marginWidth="0"
        marginHeight="0"
        allowFullScreen
        title="python"
      ></iframe>
      <p>data works</p>
    </div>
  );
}
export default DataAnal;
