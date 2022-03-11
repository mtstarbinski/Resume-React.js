import React from "react";
import Section from "./Section";
import data from "../data/sample.data";

const Body = () => {
  const sec = data;

  return (
      sec.map(({ id, ...props}) => (
        <Section
          key={id}
          id={id}
          {...props}
        />
      ))
  );
};

export default Body;
