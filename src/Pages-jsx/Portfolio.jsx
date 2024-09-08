import React from 'react';
import '../Pages-css/Portfolio.css';


function Portfolio() {
    
    const projects = [
        {
            image: "", 
            title: 'simple-room-managment',
            description: 'simple system made by c++ program for room reservation.',
            link: 'https://github.com/MierafA12/simple-room-managment', 
        },
        {
            image: "", 
            title: 'lounge food ordering web',
            description: 'food ordering web for lounges made by react and its backend.',
            link: 'https://github.com/nigus-tatek/LOUNGE-FOODORDERING-SYSTEM-WEBSITE', 
        } 
      
        
]; 

    return (
        <div className="portfolio-container">
            <div className="portfolio-content">
            <h1>Featured Projects</h1>
                <section className="projects">
                    
                    
                    {/* Conditionally render based on whether there are any projects */}
                    {projects.length > 0 ? (
                        <div className="project-cards">
                            {projects.map((project, index) => (
                                <div className="project-card" key={index}>
                                    <div className='all'>
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-projects-message">There are no projects yet.</p>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Portfolio;