import React from "react";
import { useParams } from "react-router-dom";

const Service = () => {
  const { id } = useParams();
  const data = {
    "1234": {
      title: "Service 1",
      description: "This is test Description for service 1",
    },
    "5678": {
      title: "Service 2",
      description: "This is test Description for service 2",
    },
  };

  return (
    <div>
      <h2>{data[id].title}</h2>
      <p>{data[id].description}</p>
    </div>
  );
};

export default Service;
