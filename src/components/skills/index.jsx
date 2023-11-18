import React from "react";
import "./style.scss";
import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="Spring, Java"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        <li>
                            Programming Languages: Java, Python, JavaScript,
                            C++.
                        </li>
                        <li>
                            Frameworks and Libraries: Spring Boot, Spring MVC,
                            ReactJS, NodeJS, ExpressJS.
                        </li>

                        <li> Web Technologies: HTML5, CSS, Bootstrap.</li>

                        <li>Databases: MySQL, PostgreSQL, MongoDB.</li>

                        <li>
                            Cloud Technologies: AWS, Google Cloud Platform,
                            Docker.
                        </li>

                        <li>
                            Tools/Platforms: Git, Jira, Postman, Maven, Jenkins,
                            Apache Tomcat, SharePoint.
                        </li>
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
