import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import mindloads from "../../Assets/Projects/mindloads.png";
import cartleInfosystem from "../../Assets/Projects/cartleInfosystem.png";
import businessprofile from "../../Assets/Projects/businessprofile.png";
import moviecard from "../../Assets/Projects/moviecard.png";
import food from "../../Assets/Projects/FoodApp.png";
import memory from "../../Assets/Projects/memory.png";
import diary from "../../Assets/Projects/mydairy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviecard}
              isBlog={false}
              title="Movie Card"
              description="Using React JS , create a simple website that lists movies in a card format."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://moviecard.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Ai For Social Good"
              description="Using React JS & Bootstrap Css, create a simple website that lists foods in a card format."
              
              demoLink="https://foodapp-theta.vercel.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Game"
              description="This is a JavaScript-based memory game. This project was created during my internship as a Web Developer Intern at Workplay."
           
              demoLink="https://memory-game.internalworkpla.repl.co/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={businessprofile}
              isBlog={false}
              title="Business Profile"
              description="My freelancing project, in which I designed a business profile website for a financial advisor."
             
              demoLink="https://ishwarpatil.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindloads}
              isblog={false}
              title="Hiring & Consultancy Corporate Website"
              description="My second project as a freelancer. This website was created to help in hiring, train users, and get them ready for interviews."
           
              demoLink="https://mindloads.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diary}
              isblog={false}
              title="Note-MyDiary"
              description="This is a full stack website created by my Me & My friend a note taking website, where you can add, edit, delete and search notes."
           
              demoLink="https://mydiary-zpac.onrender.com/"              
            />
          </Col>


         
         
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cartleInfosystem}
              // isBlog={false}
              title="Corporate Website(Ongoing Project"
              description="This project was created for a corporate organisation during my internship at carlteinfosystems.
                 
              Cartel is a leading provider of world-class IT solutions.Our growing portfolio of services includes cloud, security, licensing, SAM, storage, virtualisation and managed services."
             
              demoLink="https://cartelinfosystems.vercel.app/"              
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
