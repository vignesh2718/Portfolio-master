import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vignesh N </span>
            from <span className="purple"> Banglore, India.</span>
            <br />I'm  pursuing Computer Science Engineering in<span className="purple">  Presidency University, Bangalore.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoy Reading Newspapers
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore New Things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be You & Be Unique!"{" "}
          </p>
          <footer className="blockquote-footer">Vignesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
