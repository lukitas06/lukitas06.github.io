import React from 'react';
import Header from '../components/header';
import '../styles/landing.css';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

export default function Landing() {

    const navigate = useNavigate();
    const proyectRef = useRef();
    const isVisibleProyects = useIsVisible(proyectRef);
    const teoricRef = useRef();
    const isVisibleTeoric = useIsVisible(teoricRef);

    const goToBlog = (url) => {
        navigate(`/projects/${url}`);
    };


    return (
        <div className='app-container'>
            <Header />
            <div className="landing-container flex justify-center items-center flex-col">
                <div className='flex flex-row mb-28'>
                    <div className='flex flex-col gap-12 p-10 w-full items-center'>
                        <h1 className='text-6xl h-fit'><span className='text-2xl'>Hola, somos</span><br></br><span className='font-bold tracking-wide text-rose-600'>Lucas, Juan y Manuel</span><br></br><span className='text-2xl font-medium'>Estudiantes de Ingeniería en Informática</span></h1>
                        <p className='font-medium text-lg leading-relaxed tracking-wide w-4/5 text-gray-400'>
                            Este es un proyecto de portafolio personal donde presentamos nuestras habilidades y experiencia en el ámbito de la ciencia de datos. Aquí encontrarás una selección de proyectos que abarcan diversas áreas, como el análisis de datos, machine learning y la resolución de problemas complejos utilizando herramientas avanzadas.<br></br>
                            Explora los proyectos y aprende más sobre nuestro enfoque y el trabajo que hemos realizado.
                        </p>
                    </div>

                </div>
                <h1 className='landing-title '>Proyectos básicos</h1>
                <h1 className='font-semibold'>¡Desliza para hecharles un vistazo! </h1>
                <div ref={proyectRef} className={`flex flex-row gap-10  p-10 snap-x snap-mandatory overflow-hidden overflow-x-scroll   w-full items-center transition-opacity ease-in duration-1000  ${isVisibleProyects ? "opacity-100" : "opacity-0"} `}  >
                    <Card title='Housing' img='/background_projects/housing.jpg' onClick={() => goToBlog('Housing')} description="Proyecto enfocado en el análisis de atributos y exploración de modelos de regresión." />
                    <Card title='Heart Disease' img='/background_projects/heart_disease.jpg' onClick={() => goToBlog('Heart_Disease')} description="Problema de clasificación. El enfoque se da en la preparación de los datos y elección de un modelo de tipo clasificación binomial" />
                    <Card title='Sonar' img='/background_projects/sonar.jpg' onClick={() => goToBlog('Sonar')} description="Problema de tipo clasificación. El enfoque se da en la exploración y elección de algoritmos de feature selection. " />
                    <Card title='Titanic' img='/background_projects/titanic.jpeg' onClick={() => goToBlog('Titanic')} description="Aborda un problema de tipo clasificación binaria. El objetivo principal es predecir si un pasajero sobrevivió o no al hundimiento del Titanic." />
                    <Card title='Boston' img='/background_projects/housing.jpg' onClick={() => goToBlog('Boston')} description="Problema de tipo regresión. Se enfoca en modelar cómo las características de un área geográfica (suburbio) influyen en el precio medio de las viviendas." />

                </div>
                <h1 className='landing-title'>Explora nuestro marco teórico</h1>
                <h1 className='font-semibold'>¡Desliza para aprender! </h1>

                <div ref={teoricRef} className={`flex flex-row gap-10  p-10 snap-x snap-mandatory overflow-x-scroll  w-full items-center transition-opacity ease-in duration-1000  ${isVisibleTeoric ? "opacity-100" : "opacity-0"} `}>
                    <Card title="Preparación de los datos" img="/preprocessing.jpg" onClick={() => goToBlog('Preprocessing')} description="Aprende sobre las diferentes herramientas y técnicas que se utilizan como parte de la preparación de los datos, en el proceso de creación de un modelo de Machine Learning." > </Card>
                    <Card title="Supervisado vs no supervisado" img="/supervised_unsupervised.jpg" onClick={() => goToBlog('Supervised_Unsupervised')} description="Lee y aprende sobre las características, diferencias y casos de uso de los modelos supervisados y no supervisados de Machine Learning." > </Card>

                </div>
            </div>
        </div>
    );
}

function Card({ title, img, onClick, description }) {
    return (
        <div className="w-3/12 shrink-0 flex flex-col snap-center rounded-xl shadow-md" onClick={onClick}>
            <div className='relative rounded-xl transition duration-300 hover:transform hover:scale-110'>
                <div className='project-img'>
                    <img className='' src={img} alt="project" />
                </div>
                <div className='project-text'>
                    <h2 className='text-center'>{title}</h2>
                </div>

                <div className='px-8 py-10 flex flex-col items-center absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition duration-800  bg-white text-black'>
                    <h2 className='text-center font-bold text-xl'>{title}</h2>
                    <p className='text-center font-medium text-gray-500 text-lg h-fit'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        });

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}