import React, { Component } from 'react';
import me from './Images/me.jpg';
import viasat from './Images/viasat.png';
import responseBot from './Images/responseBot.png';
import projectStratus from './Images/projectStratus.png';
import decisionTreeLearner from './Images/decisionTreeLearner.png';
import bayes from './Images/bayes.png';
import cumulyrics from './Images/cumulyrics.png';
import resume from './Images/resume.png';
import './App.css';
import './materialize.min.css'



function Title(props)
{
  return <h1 className="title">{props.name}</h1>
}

function SectionHeader(props)
{
  return <h1 className="sectionHeader">{props.name}</h1>
}

function Header(props)
{
  return <header className="header">
    <Title name={props.name} />
  </header>
}

function Description(props)
{
  return <div className="row">
      <div className="col s4">
        <img src={props.imgSrc} className="responsive-img z-depth-3" alt={props.alt} />
      </div>
      <div className="col s8">
        <div className="card-panel blue-grey">
          <span className="white-text flow-text">{props.text}</span>
        </div>
      </div>
    </div>
}

function TimelineCard(props) {
  return <div className="card timeline-content">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={props.src}  alt="img"/>
      </div>

      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{props.titleOuter}
        <i className="material-icons right">more_vert</i></span>
        <p>{props.subTitle}<a href={props.href}>{props.linkText}</a></p>
      </div>

      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{props.titleInner}
        <i className="material-icons right">close</i></span>
        <p>{props.info}</p>
      </div>
    </div>
}

class App extends Component
{
  render()
  {
    return (
      <div className="App">
        <Header name="Kyle Van Landingham" />
        <div id="about" className="container">
          <SectionHeader name="About Me"/>
            <Description
              imgSrc={me}
              alt="Photo of Kyle Van Landingham"
              text="I recently graduated with a Bachelors of Science in Computer Science at the University of Southern California. I'm currently working at Viasat Inc. as a Software Engineer primarily focusing on developing augmented reality applications."
            />
        </div>

        <div className="container">
          <SectionHeader name="Experience"/>
          <div className="timeline">
            <div className="timeline-event">
              <TimelineCard
                src = {viasat}
                titleOuter = "Viasat"
                subTitle = ""
                href = "https://viasat.com/careers/university/interns"
                linkText = "Summer 2018 Internship"
                titleInner = "My Experience"
                info = "I was placed on a three person team tasked with researching and rapidly developing prototypes for augmented reality. My work was mainly centered around the Microsoft Hololens and development with the Unity Game Engine and C#. I also spent some time working with linux and python to create a network emulation tool that is currently being used by the company for testing network applications. I used Github wikis as well as Confluence to document my team's work throughout the Summer. At the company hackathon my team won the People's Choice Award for our augmented reality application that helps search and rescue teams visualize the location of injured people in augmented reality. This internship was a valuable learning experience for me because I was able to interact with professionals in various different development teams as well as senior leadership. My work led to the planning of demonstrations of augmented reality technology for multiple high profile conferences. "
              />

              <div className="timeline-badge blue white-text"><i className="material-icons">work</i></div>
              </div>

              <div className="timeline-event">
              <TimelineCard
                src={responseBot}
                titleOuter="ResponseBot"
                subTitle=""
                href = "https://github.com/kvanland/responseBot"
                linkText="Website"
                titleInner="Discord text bot"
                info = "A multi-function discord text bot that can access multiple online services such as Youtube and Twitter. This bot can be easily set up and ran on pretty much any computer or server with an internet connection."
              />
                <div className="timeline-badge red white-text"><i className="material-icons">computer</i></div>
              </div>

              <div className="timeline-event">
              <TimelineCard
                src={projectStratus}
                titleOuter="Project Stratus"
                subTitle=""
                href = "https://github.com/kvanland/csci310TeamP"
                linkText = "Repository"
                titleInner = "Project Stratus - Academic Article Word Clouds"
                info = "This project generates word clouds from academic articles contained in the IEEE xplore library and the ACM digital library. Users can generate word clouds based on authors, keywords, or subsets or articles chosen within the application. The project was completed using Scrum and multiple Extreme Programming practices in a group of five students. This project was completed using an agile methodology in a team of five students for CSCI 310 Software Engineering at the University of Southern California. The team made use of Scrum and multiple Extreme Programming practices. There were three sprints during the lifetime of this project and six stand ups for each sprint. The Extreme Programming practices used include, sustainable pace, test driven development, pair programming, simple design, collective code ownership, refactoring, continous testing, and creating a test for each bug found. The team utilized the automated testing frameworks Behat, phpUnit, and qUnit to create and run the test suite for the system. "
              />
                <div className="timeline-badge green white-text"><i className="material-icons">desktop_mac</i></div>
              </div>

              <div className="timeline-event">
              <TimelineCard
                src={cumulyrics}
                titleOuter="Cumulyrics"
                subTitle="Musical lyric word clouds"
                href = "https://github.com/kvanland/csci310Team19"
                linkText = "Repository"
                titleInner = "Cumulyrics"
                info = "This project generates word clouds from lyrics of musical artists. Users can select/search from a large database of multiple thousand musical artists and the application will generate a word cloud of the top 250 words used in all of a selected artist's songs. The system also has to ability to merge two or more word clouds together that have a shared pool of words that make up their collective word clouds. This project was completed using the waterfall model in a team of five students for CSCI 310 Software Engineering at the University of Southern California. The team made use of google docs to collaboratively generate documentation such as the SRS (Software Requirements Specification) and the Detailed Design Document. The team utilized the automated testing frameworks Behat and phpUnit to create and run the test suite for the system."
              />
                <div className="timeline-badge yellow white-text"><i className="material-icons">desktop_mac</i></div>
              </div>

              <div className="timeline-event">
              <TimelineCard
                src = {decisionTreeLearner}
                titleOuter="Decision Tree Learner"
                subTitle=""
                href = ""
                linkText = ""
                titleInner = "Decision Tree Learner"
                info = "A decision tree learner that evaulates on a mushroom dataset from UC Irvine. The classification is binary and the features are multi-valued and discrete."
              />
                <div className="timeline-badge purple white-text"><i className="material-icons">desktop_mac</i></div>
              </div>

              <div className="timeline-event">
              <TimelineCard
                src={bayes}
                titleOuter = "Naive Bayesian Network"
                subTitle=""
                href = ""
                linkText = ""
                titleInner = "Naive Bayesian Network"
                info = "A naive bayesian network that classifes images of handwritten digits from the MNIST database. The naive assumption is that each pixel in each 28x28 image is conditionally independant to each other pixel. To simplify the program we also binarize each pixel to 0 or 1 rather than consider 255 discrete values."
              />
                <div className="timeline-badge blue-grey white-text"><i className="material-icons">desktop_mac</i></div>
              </div>

          </div>

          <SectionHeader name="Resume"/>
          <img src ={resume} className="responsive-img" alt="resume"/>

          <footer className="page-footer blue-grey darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Kyle Van Landingham</h5>
                <p className="grey-text text-lighten-4">Feel free to contact me!</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="mailto:kylevanlandingham9@gmail.com">Email</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/kvanland">Github</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/kylevanlandingham/">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
