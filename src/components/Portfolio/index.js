import React from 'react';
import ProjectList from '../ProjectList';


function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">(currentCategory.name)</h1>
      <p>{currentCategory.description}</p>
      <ProjectList category={currentCategory.name} />
    </section>
  );
}
export default Portfolio;
