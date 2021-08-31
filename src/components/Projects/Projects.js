import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import rcnn from "../../Assets/Projects/gear.jpg";
import face from "../../Assets/Projects/reception.jfif";
import mask from "../../Assets/Projects/mask.png";
import rtims from "../../Assets/Projects/rtimms.jpg";
import Ecomm from "../../Assets/Projects/Ecomm.png";
import apple from "../../Assets/Projects/leaf.png";

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
              imgPath={rcnn}
              isBlog={false}
              title="Imaging Inspection of product using Mask RCNN"
              description="In the existing methods industries uses manual checking by different gauges to identify the defects in products.  In this proposed model, image processing method is employed to identify various defects in products. First the images are captured using image sensor for training the dataset. The captured images are classified with different classes and trained using Recurrent Neural Networks (RNN).  While real time capturing, first the picture of the product is captured and compared with the existing trained dataset.  For testing, gear is employed as a subject material, here we have classified different cases into three as tooth missing, scratched gear and perfect gear. "
              link="https://github.com/jarvis1200/MASK_RCNN_PROJECT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Facial Recognition Receptionist"
              description="We can use face recognition to record timing data from everyone present in an office. In this face recognition, many algorithms are performed to dissect and capture images of someone's face, such as Machine Learning and Deep Learning. With this algorithm, the system can recognize a person's face and welcome them by calling there name also record timing of that person so that finding customers activities are more efficient and faster."
              link="https://github.com/jarvis1200/Face_recognition_receptionist"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mask}
              isBlog={false}
              title="Facial mask Recognition"
              description="The coronavirus primarily spreads through the transmission of respiratory droplets from infected people So, Deep learning helps to identify the people without the wearing mask,  Convolutional neural network (CNN) has a major role to recognize the visionary system which helps to detect the images of peoples were with the mask or without a mask. MobilenetV2 architecture is used to train a model of image classification to detect peoples in public places and give an awareness of wearing a mask in public.
              "
              link="https://github.com/jarvis1200/FACE-MASK-DETECTING-APP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecomm}
              isBlog={false}
              title="Alita Jewel E-Comm"
              description = 'Alita is a Ecommerce jewelry application which is build using flutter as fronted and firebase for backend'
              link="https://github.com/jarvis1200/Ecommerce-shopping-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rtims}
              isBlog={false}
              title="Real Time Industrial Monitoring System"
              description="Real time industrial monitoring system (RTIMS) is monitoring 
              the whole industrial machines and devices. we are going to 
              innovate some futuristic things like tracking the whole goods 
              and products , finding the accidental errors before the major 
              accidents happens and automatically fix that type of problem.

              • Using some algorithm and machine learning (Ml) this types 
              of errors all fix it. using artificial intelligence the real time 
              errors and tracking systems are controlled which is also 
              monitor with more accuracy.
              "
              link="https://github.com/jarvis1200/REAL-TIME-INDUSTRIAL-MONITORING-SYSTEM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="Apple Leaf Disease Detection"
              description="Premature leaf fall, scab, Alternaria leaf spot, brown spot, mosaic, grey spot, and rust are common types of apple leaf 
              diseases. Due to the arrival of monsoon, there is excess moisture in the air because of an outbreak of diseases in plants 
              that is being witnessed in the hilly region. Farmers from these regions are always worried about the health of Apple 
              plants.Our proposed system identifies 
              various apple leaf diseases in an early stage that will alert the farmers and nearby research institutes to take appropriate 
              action to control it."
              link="https://github.com/jarvis1200/Apple-leaf-Disease-detection/tree/main"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
