import React, { useState } from 'react';


const ProjectList = ({ category }) => {
   
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: <a href='https://calm-plains-32572.herokuapp.com/'> Word Raffle</a>
        },
        {
            name: <a href='https://mackenzieabe.github.io/TheQuizWiz/'>The Quiz Wiz</a>
        },
        {
            name: <a href='https://mackenzieabe.github.io/DoorsofDurin/'>Doors of Durin</a>
        },
        {
            name: <a href='https://konopie.github.io/cat-generator/'> Cat Genie </a>
        }
    ]) 

    const currentPhotos = photos.filter(photo => photo.category === category);
 
  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/portfoliopics/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;