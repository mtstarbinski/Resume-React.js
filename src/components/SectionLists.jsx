import React from "react";

const SectionLists = ({
  id,
  title,
  subtitle,
  date,
  location,
  honors,
  contact,
  list,
}) => {
  return (
    <div className={`section-info-${id}`}>
      <h4 className="sectionTitle">{title}</h4>
      <h4 className="sectionSubtitle">{subtitle}</h4>
      <div className="dateAndLoc">
        <p>{date}</p>
        <p>{location}</p>
      </div>
      <p>{honors}</p>
      <ul>
        {list.map((bullet) => {
          return <li key={bullet.listId}>{bullet.value}</li>;
        })}
      </ul>
      <p>{contact}</p>
    </div>
  );
};

export default SectionLists;
