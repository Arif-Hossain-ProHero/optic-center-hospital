import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleService from "../SingleService/SingleService";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("/fakeDb.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  const items = service.filter((s) => s.id == serviceId);
  console.log(items);
  return (
    <div>
      <div>
        {items.map((item) => (
          <SingleService item={item}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
