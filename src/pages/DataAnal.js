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
        src="https://trinket.io/embed/python/3d8d7ce66b"
        width="100%"
        height="356"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
        allowfullscreen
        title="python"
      ></iframe>
      <p>data works</p>
    </div>
  );
}
export default DataAnal;
