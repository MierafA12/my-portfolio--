import React from 'react';
import '../Pages-css/Portfolio.css';
import Lounge from '../assets/Lounge.png';
import quizapp from '../assets/quizapp.png';
import Ethiolingo from '../assets/Ethiolingo.jpg'
import hemenhotel from '../assets/hemenhotel.png'
import task from '../assets/task.jpg'
import car from '../assets/car.jpg'
function Portfolio() {
    
    const projects = [
         {
            image: Ethiolingo, 
            title: 'local language lerning app',
            description: 'A local language learning app designed to help users easily learn and practice Ethiopian languages through interactive lessons and engaging activities also offline support.',
            link: 'https://github.com/Hailemeskel-Getaneh/EthioLingo', 
        },
         {
            image: Lounge, 
            title: 'lounge food ordering web',
            description: 'food ordering web for lounges made by react and its backend.',
            link: 'https://github.com/MierafA12/food-ordering-web', 
        },
        {
            image: hemenhotel, 
            title: 'hemen hotel ',
            description: 'This is hotel website build for hemen ',
            link: 'https://github.com/MierafA12/HemenHotel', 
        },
          {
            image: quizapp, 
            title: 'Quiz App with Timer',
            description: 'This app is designed to make learning fun and engaging by testing your knowledge across various topics.',
            link: 'https://github.com/Hailemeskel-Getaneh/QuizApp', 
        },
          {
            image: task, 
            title: 'simple task managment ',
            description: 'This app is simple task manager app worked by react native store and check complated taks ',
            link: 'https://github.com/MierafA12/simpletaskmanager', 
        },
        {
            image: car, 
            title: 'car rent app ',
            description: 'car rent app worked by react native and by using local storage .',
            link: 'https://github.com/MierafA12/simple-room-managment', 
        },
       
      
        

      
        
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