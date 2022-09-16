import React, { useState } from 'react';
import './projectList.css'

const ProjectList = ({ category }) => {

  // const [currentPhoto, setCurrentPhoto] = useState();

  const projects = [
    {
      name: "Word Raffle",
      link: 'https://calm-plains-32572.herokuapp.com/',
      src: '/images/wordraffle.png'
    },
    {
      name: "The Quiz Wize",
      link: 'https://mackenzieabe.github.io/TheQuizWiz/',
      src: '/images/quizwiz screenshot1.png'
    },
    // {
    //     name: <a href='https://mackenzieabe.github.io/TheQuizWiz/'>The Quiz Wiz</a>
    // },
    // {
    //     name: <a href='https://mackenzieabe.github.io/DoorsofDurin/'>Doors of Durin</a>
    // },
    // {
    //     name: <a href='https://konopie.github.io/cat-generator/'> Cat Genie </a>
    // }
  ]

  // const currentPhotos = photos.filter(photo => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {projects.map((image, i) => (
          <div key={image.name}>
            <h1>{image.name}</h1>
            <a href={image.link}><img
              src={image.src}
              alt={image.name}
              className="img-thumbnail mx-1"
            /></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;