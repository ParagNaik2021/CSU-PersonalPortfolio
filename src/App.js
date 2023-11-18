import React from "react";
import Intro from "./components/intro";
import "./app.scss";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Blog from "./components/blogs";
import Contact from "./components/contact";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blog />
            <Contact />
        </div>
    );
};

export default App;
