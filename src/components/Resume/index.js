import React from 'react';
import './resume.css'

function Resume() {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <h1> Resume </h1>
            <a href='https://drive.google.com/file/d/1qW1EhEpMQ78qJM4uVx09JfLkGKqIz654/view?usp=sharing'>
              <button className='downloadbtn'>Download</button>
            </a>
          </div>
        </div>
      </div>
      <div className='container'>
        <div >
          <h3>Front-end Proficiences</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <h3> Back-end Proficiences</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>Mysql, Sequelize</li>
            <li>MondoDB, Mongoose</li>
            <li>REST</li>
          </ul>

        </div>
      </div>
    </section>
  )
}

export default Resume;


