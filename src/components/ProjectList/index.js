import React from 'react';
import './projectList.css'

const ProjectList = ({ cateogry }) => {

  return (
    <div className="row">
      <div className="col-md-6 m-4">
        <div className="thumbnail">
          <a href="https://calm-plains-32572.herokuapp.com/">
            <img src="/images/wordraffle.png" alt="wordraffle screenshot" style={{ width: "65%" }}></img>

          </a>
        </div>
      </div>
      <div className="col-md-6 m-4">
        <div className="thumbnail">
          <a href="https://mackenzieabe.github.io/TheQuizWiz/">
            <img src="/images/quizwiz.png" alt="quizqiz screenshot" style={{ width: "65%" }}></img>

          </a>
        </div>
      </div>
      <div className="col-md-6 m-4">
        <div className="thumbnail">
          <a href="https://konopie.github.io/cat-generator/">
            <img src="/images/catgenie.png" alt="cat genie screenshot" style={{ width: "65%" }}></img>
          </a>
        </div>
      </div>
      <div className="col-md-6 m-4">
        <div className="thumbnail">
          <a href="https://mackenzieabe.github.io/DoorsofDurin/">
            <img src="/images/doorsofdurin.png" alt="doors of durin screenshot" style={{ width: "65%" }}></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectList;