import React, { useEffect, useState } from "react";

const Test = (props) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakeDb.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const single = services.filter((s) => s.id === 2);
  console.log(single);
  return <div>title: {single[0].title}</div>;
};

export default Test;
