import React from 'react'
import './projectList.css'
import wordraffle from '../../assets/images/wordraffle.png'
import quizWiz from '../../assets/images/quizwiz.png'
import catGenie from '../../assets/images/catgenie.png'
import doorsOfDurin from '../../assets/images/doorsofdurin.png'
import weatherDashboard from '../../assets/images/notalwayssunny.png'
import noteTaker from '../../assets/images/notetaker.png'


const ProjectList = ({ cateogry }) => {

  return (
    <section className="gallery min-vh-100">
      <div className="container-lg">
        <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          <div className="col">
            <a href="https://calm-plains-32572.herokuapp.com/">
              <img src={wordraffle} alt="wordraffle screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/bethanyshoun/wordraffle.git'> Word Raffle </a>
          </div>
          <div className="col">
            <a href="https://mackenzieabe.github.io/TheQuizWiz/">
              <img src={quizWiz} alt="quizqiz screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/mackenzieabe/TheQuizWiz.git'> The Quiz Wiz</a>
          </div>
          <div className="col">
            <a href="https://konopie.github.io/cat-generator/">
              <img src={catGenie} alt="cat genie screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/Konopie/cat-generator.git'> Cat Genie</a>
          </div>
          <div className="col">
            <a href="https://mackenzieabe.github.io/DoorsofDurin/">
              <img src={doorsOfDurin} alt="doors of durin screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/mackenzieabe/DoorsofDurin.git'>Doors of Durin</a>
          </div>
          <div className="col">
            <a href="https://mackenzieabe.github.io/NotAlwaysSunny/">
              <img src={weatherDashboard} alt="weather dashboard screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/mackenzieabe/NotAlwaysSunny.git'>Weather Dashboard</a>
          </div>
          <div className="col">
            <a href="https://noteablyawesome.herokuapp.com/notes">
              <img src={noteTaker} alt="note taker screenshot"></img>
            </a>
            <a className='project-names' href='https://github.com/mackenzieabe/notableyAwesome.git'>Note Taker</a>
          </div>
        </div>
      </div>
    </section>

  )
}


export default ProjectList;