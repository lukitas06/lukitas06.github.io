import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/landing.css';
import { useNavigate } from 'react-router-dom';

export default function Landing() {

    const navigate = useNavigate();

    const goToBlog = (url) => {
        navigate(`/projects/${url}`);
    };


    return (
        <div className='app-container'>
            <Header />
            <div className="landing-container flex justify-center items-center flex-col">
                <p className='font-medium text-xl leading-relaxed w-4/5'>Bienvenido a mi Portafolio de Data Science
                    Este es un proyecto de portafolio personal donde presento mis habilidades y experiencia en el ámbito de la ciencia de datos. Aquí encontrarás una selección de proyectos que abarcan diversas áreas, como el análisis de datos, machine learning y la resolución de problemas complejos utilizando herramientas avanzadas.<br></br> Mi objetivo es mostrar el impacto que puede tener la ciencia de datos en la toma de decisiones y cómo los datos pueden transformar el mundo empresarial.
                    Explora los proyectos y aprende más sobre mi enfoque y el trabajo que he realizado.
                </p>
                <h1 className='landing-title'>Proyectos básicos</h1>
                <div className='projects-container'>

                    <div className="project-card" onClick={() => goToBlog('Housing')}>
                        <div className='project-img'>
                            <img src="/background_projects/housing.jpg" alt="project" />
                        </div>
                        <div className='project-text'>
                            <h2 className='font-bold'>Housing</h2>

                        </div>
                    </div>
                    <div className="project-card" onClick={() => goToBlog('Heart_Disease')} >
                        <div className='project-img'>
                            <img src="/background_projects/heart_disease.jpg" alt="project" />
                        </div>
                        <div className='project-text'>
                            <h2>Heart Disease</h2>

                        </div>
                    </div>
                    <div className="project-card" onClick={() => goToBlog('Sonar')}>
                        <div className='project-img'>
                            <img src="/background_projects/sonar.jpg" alt="project" />
                        </div>
                        <div className='project-text'>
                            <h2>Sonar</h2>
                        </div>
                    </div>
                    <div className="project-card" onClick={() => goToBlog('ERC')}>
                        <div className='project-img'>
                            <img src="/background_projects/erc.jpg" alt="project" />
                        </div>
                        <div className='project-text'>
                            <h2>Enfermedad Renal Crónica</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}