import React from "react";
import { useParams } from "react-router";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  return <div>This is Service Detail {serviceId}</div>;
};

export default ServiceDetail;
