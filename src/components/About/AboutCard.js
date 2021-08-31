import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nizamudeen </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            
            <br />I have completed Mechatronics engineering at Bharath University with a passion for Robotics and Artificial Intelligence.
            <br />
            <br />Everyday I improve myself and learn how to train artificial brains better to boost their intelligence.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Star Gazzing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Binge watching
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Germen
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Always believe that something wonderful is about to happen"{" "}
          </p>
          <footer className="blockquote-footer">This words helps me to push forward</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
