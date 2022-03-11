import React from 'react';
import SectionLists from './SectionLists';

const Section = ({name, info}) => {

  return (
    <section title={name}>
      <h3>{name}</h3>
      <hr />
      {info.map(({infoId, ...secProps}) => (
        <SectionLists key={infoId} id={infoId} {...secProps} />
      ))}
    </section>   
  )
};

export default Section;
