import React from "react";
import "./style.scss";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import boy from "../../../images/Boy.png";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

function IntroContent() {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                                <span className="text"> I Am Parag </span>
                            </span>
                        </span>
                        <span className="big-text"></span>
                    </h1>
                    <p>
                        With over 6 years of experience in the dynamic field of
                        software engineering, I have had the privilege of
                        contributing to various aspects of the industry. My
                        journey in technology has been marked by a commitment to
                        innovation, problem-solving, and continuous learning.
                        Throughout my career, I have gained valuable
                        experience.I am passionate about embracing new
                        challenges and contributing to the evolving landscape of
                        software engineering. Let's connect to explore potential
                        collaborations or discuss exciting prospects in software
                        engineering and technology.
                    </p>
                    <CallToAction text="Contact me" />
                </div>
                <div className="right-col">
                    <img
                        src={boy}
                        alt="Parag Naik"
                    />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Summit Award 2019</div>
                    </div>
                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>Apex Award</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroContent;
