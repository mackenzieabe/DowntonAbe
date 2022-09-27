import React from 'react';
import './projectList.css'

const ProjectList = ({ cateogry }) => {

  return (
    <section className="gallery min-vh-100">
      <div className="container-lg">
        <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          <div className="col">
            <a href="https://calm-plains-32572.herokuapp.com/">
              <img src="/images/wordraffle.png" alt="wordraffle screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/bethanyshoun/wordraffle.git'> Word Raffle </a>
          </div>
          <div className="col">
            <a href="https://mackenzieabe.github.io/TheQuizWiz/">
              <img src="/images/quizwiz.png" alt="quizqiz screenshot"></img>
            </a>
            <a  className='project-names' href='https://github.com/mackenzieabe/TheQuizWiz.git'> The Quiz Wiz</a>
          </div>
          <div className="col">
            <a href="https://konopie.github.io/cat-generator/">
              <img src="/images/catgenie.png" alt="cat genie screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/Konopie/cat-generator.git'> Cat Genie</a>
          </div>
          <div className="col">
            <a href="https://mackenzieabe.github.io/DoorsofDurin/">
              <img src="/images/doorsofdurin.png" alt="doors of durin screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/mackenzieabe/DoorsofDurin.git'>Doors of Durin</a>
          </div>
          <div className="col">
            <a href="https://mackenzieabe.github.io/NotAlwaysSunny/">
              <img src="/images/notalwayssunny.png" alt="weather dashboard screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/mackenzieabe/NotAlwaysSunny.git'>Weather Dashboard</a>
          </div>
          <div className="col">
            <a href="https://noteablyawesome.herokuapp.com/notes">
              <img src="/images/notetaker.png" alt="note taker screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/mackenzieabe/notableyAwesome.git'>Note Taker</a>
          </div>
        </div>
      </div>
    </section>

  )
}


export default ProjectList;