import React from 'react';
import Header from '../components/header';
import '../styles/about.css';

export default function About() {
    return (
        <div className='app-container'>
            <Header />
            <div className='about-container'>
                <h1 className='about-title'>Portafolio Data Science</h1>
                <div className='about-text'>
                    <p className='font-normal text-2xl leading-relaxed'>

                        Soy un estudiante de Ingeniería en Informática con un enfoque en la resolución de problemas a través del análisis de datos y el desarrollo de soluciones basadas en machine learning. A lo largo del minor en Data Science he podido desarrollar un enfoque integral hacia la ciencia de datos, combinando técnicas avanzadas de modelado con prácticas de programación eficientes y seguras.
                        A lo largo de este curso, he trabajado en proyectos que abarcan desde la predicción de tendencias hasta la detección de patrones en datos complejos. Estoy constantemente aprendiendo nuevas tecnologías y enfoques para mejorar mis habilidades y adaptarme a los retos cambiantes del campo.
                        Este portafolio es un reflejo de mi evolución en el mundo de la ciencia de datos y una plataforma para compartir mis proyectos con la comunidad. Explora los proyectos y descubre cómo los datos pueden transformar la toma de decisiones y el mundo empresarial.
                    </p>
                </div>
            </div>
        </div>
    );
}