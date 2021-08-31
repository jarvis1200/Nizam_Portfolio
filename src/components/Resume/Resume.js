
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";

import pdf from "../../Assets/NIZAM_2021_RES.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Machine Learning Researcher [ Ajlon Solution ]"
              date="NOV 2020 - MAR 2021"
              content={[
                " Developed new software for facial recognition robot and implemented some features like motion capture, motion estimation, 3D reconstruction, structure-from-motion, visual odometry, feature detection.",
                " Created instant imaging segmentation software using MASK RCNN to detect and scrutinize the failure product of mechanical gears, which give reliable, cost-effective, and high-quality solutions for manufacturing products."
              ]}
            />
            <Resumecontent
              title="Data Science Intern [ The Spark Foundation ]"
              date="SEP 2020 - NOV 2020"
              content={[
                " Applied rapid application development (RAD) techniques to programming tasks.",
                " Translated benefits of machine learning technology for non-technical audiences, including cost/benefit analyses.",
                " Designed and developed Business products using supervised & unsupervised machine learning and decision tree algorithm."
              ]}
            />

            <Resumecontent
              title="Computer Vision Intern [ Technocolabs ]"
              date="JUN 2020 - SEP 2020"
              content={[
              " I created The Real-Time Face Mask Detection which identifies the person wearing a mask or not using MobilenetV2 architecture and OpenCV with 99.6% accuracy.", 
              " The trained model implemented in Security Web cameras and also developed the Mobile Application to identify in public and more than 100 private companies."]}
            />

            <Resumecontent
              title="Android Development [ TwinTech Solutions]"
              date="JAN 2020 - MAR 2020"
              content={[" Designed, developed, and tested Android and IOS applications.",
              " Created & Developed CRM & Dashboard web application for its own company benefit.", 
              " Build & developed the attendance punching mobile application for a big private corporation. The company which has more than 10,000 Workers, used this application to register attendance."]}
            />

            <Resumecontent
              title="Mechanical Engineer Intern [ Airport Authority of India ]"
              date="JUN 2019 - JUL 2019"
              content={[" This Internship has been a great platform to get practical experience in the operation, repair, and maintenance of Forklifts, LMV's, HMV's, and other specialized equipment.",
              " The Rosenbauer Panther 6x6 firetruck which is used in Chennai Airport is more powerful and has a high-tech control system. "]}
            />

          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Extracurricular Activities</h3>
              <Resumecontent
                title="Hackhathons"
                content={[
                  "Participated and Achieved in more than 25 national & international Hackhathons.",
                ]}
              />
              <Resumecontent
                title="IMTEX Bangalore"
                content={[
                  "Participated and displayed the project in 'Indian Machine Tool Manufacturers Association', were product is demonstrated among many international industrialist.",
                ]}
              />
              <Resumecontent
                title="Robotics Research Centre"
                content={[
                  "Student scholar in Robotics Research Centre also learned and developed several robotics projects",
                ]}
              />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelors's in Technology [ Bharath University, Chennai ] "
              
              date="2017 - 2021"
              content={[`CGPA: 8.2`, `Major: Mechatronics & Automation Engineering`]}
            />
            <Resumecontent
              title=" 12th BOARD [ OLVS, Chennai ] "
              date=" 2016 - 2017 "
              content={[" Percentage: 73% "]}
            />
            <Resumecontent
              title=" 10th BOARD [ OLVS, Chennai ] "
              date=" 2014 - 2015 "
              content={[" Percentage: 84% "]}
            />
            <h3 className="resume-title">Additional Courses</h3>
            <Resumecontent
              title=""
              content={[
                " Advanced Machine Learning Specialization",
                " Hyperparameter tuning and regularization",
                " Neural Network And Deep Learning",
                " Structuring Machine Learning Projects",
                " Convolutional Neural Networks",
                " Sequence Model",
                " Medical Neuro Science",
                " CNN And Computer Vision Using Keras And Tensorflow",
                " Mastering in Tensorflow",
                " Mastering in Data structure and algorithm by Abdul Bari",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
