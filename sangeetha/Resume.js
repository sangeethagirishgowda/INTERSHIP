import React from 'react';
import './Resume.css'; // Import the CSS file for styling

const Resume = () => {
    return (
        <div className="resume-container">
            <header className="header">
                <h1>Sangeetha G </h1>
                <p>Software Engineer | sangeethagirishgowda1809@gmail.com | +123-456-7890</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <p>Bachelor of Science in Computer Science - Banglore University</p>
                <p>Graduated: 2022</p>
            </section>

            <section className="section">
                <h2>Experience</h2>
                <p>Software Developer at ABC Corp (2022 - Present)</p>
                <ul>
                    <li>Developed web applications using React and Node.js</li>
                    <li>Optimized application performance, reducing load time by 30%</li>
                </ul>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <ul>
                    <li>React, JavaScript, HTML, CSS</li>
                    <li>Node.js, Express, MongoDB</li>
                    <li>Git, Docker</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;
