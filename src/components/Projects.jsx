import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import './Projects.css';

const Projects = () => {
  const CARD_STYLE = {
    width: '80%', /* Adjusted width for responsiveness */
    maxWidth: '2000px',
    textAlign: 'left',
    background: 'rgb(1, 1, 42)',
    color: '#FFF',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '20px',
    padding: '30px',
    margin: '0 auto' /* Center align cards */
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-background">
        <ReactCardCarousel autoplay={true} autoplay_speed={5500}>

          <div style={{ ...CARD_STYLE, minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h1 style={{ fontWeight: 'bold', textAlign: 'center', color: 'red' }}>Project-1</h1>
              <h2 style={{ textAlign: "center" }}>Agon Bikes and Service Booking Angular Project.</h2>
              <br />
              <h3 style={{ color: 'green' }}>Description :</h3> <b style={{ fontSize: '13px' }}>Revolutionizing bike rental and service scheduling, the Agon Bikes project merges Angular, Spring Boot, CSS, and HTML. Offering intuitive interfaces for browsing bikes and scheduling services, it ensures real-time updates and enhances user experience. This solution optimizes operations for service providers and boosts customer engagement.</b>
              <br />
              <br />
              <h3 style={{ color: 'green' }}>Tech Stack :</h3> <b> Angular, MySQL, Spring Boot, CSS, HTML.</b>
            </div>
          </div>

          <div style={CARD_STYLE}>
      <h1 style={{fontWeight:'bold',textAlign:'center',color:'red'}}>Project-2</h1>
      <h2 style={{textAlign:"center"}}>Multi-Mart E-commerce Project Application using ReactJS.</h2>
      <br />
      <h3 style={{color:'green'}}>Description :</h3> <b style={{fontSize:'13px'}}>The Multi Mart E-commerce App, powered by ReactJS, MongoDB, CSS, HTML, and JavaScript, transforms shopping. Seamless order placement, cart management, and intuitive filtering enhance user experiences. Personalized recommendations and real-time order tracking ensure a seamless journey.</b>
      <br />
      <br />
      <h3 style={{color:'green'}}>Tech Stack :</h3> <b> ReactJS, MongoDB, CSS, HTML, JavaScript.</b>
      </div>


      <div style={CARD_STYLE}>
      <h1 style={{fontWeight:'bold',textAlign:'center',color:'red'}}>Project-3</h1>
      <h2 style={{textAlign:"center"}}> Culinary Quests Restaurant Application using ReactJS.</h2>
      <br />
      <h3 style={{color:'green'}}>Description :</h3> <b style={{fontSize:'13px'}}>Crafted with ReactJS, HTML, CSS, Node.js, and MongoDB, the Culinary Quests Restaurant Application reshapes dining. Seamless exploration, item additions, and dine-in reservations enrich experiences. Personalized recommendations and real-time updates enhance convenience.</b>
      <br />
      <br />
      <h3 style={{color:'green'}}>Tech Stack :</h3><b>ReactJS, HTML, CSS, Node.js, MongoDB.</b> 
      </div>


      <div style={CARD_STYLE}>
      <h1 style={{fontWeight:'bold',textAlign:'center',color:'red'}}>Project-4</h1>
      <h2 style={{textAlign:"center"}}>Portfolio website using ReactJs.</h2>
      <br />
      <h3 style={{color:'green'}}>Description :</h3> <b style={{fontSize:'13px'}}>Built with ReactJs, Bootstrap, CSS, and HTML, my portfolio website serves as a platform to showcase my skills, projects, and professional experience. It provides visitors with insights into my technical expertise, featuring details about my skills, projects, internships, and certifications.</b>
      <br />
      <br />
      <h3 style={{color:'green'}}>Tech Stack :</h3><b> ReactJs, Bootstrap, CSS, HTML.</b>
      </div>

        </ReactCardCarousel>
      </div>
    </div>
  );
};

export default Projects;
