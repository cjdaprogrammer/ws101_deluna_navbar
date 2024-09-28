import React from 'react';
import './About.css'; // Create this file to style the About section

const About = () => {
    return (
        <div className="about-content">
            <h2>About Web Development</h2>
            <p>Web development encompasses a variety of tasks and technologies to create functional and engaging websites. Key technologies include:</p>
            <ul>
                <li>HTML: The standard markup language for creating web pages.</li>
                <li>CSS: Used for styling and layout of web pages.</li>
                <li>JavaScript: A programming language that allows for dynamic content on web pages.</li>
                <li>React, Angular, Vue.js: Popular frameworks and libraries for building modern web applications.</li>
            </ul>
            <p>Whether you're a beginner or an experienced developer, there are always new skills and technologies to learn in the field of web development.</p>
        </div>
    );
};

export default About;
