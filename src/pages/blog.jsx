import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/blog.css';


const blogCards = [
    {
        img: '/blog_cards_imgs/prediccion-card.png',
        title: 'Predicción y Toma de Decisiones',
        text: 'ML permite construir modelos que pueden predecir resultados futuros basándose en datos históricos. Esto es crucial en áreas como finanzas, marketing, y operaciones, donde predecir tendencias o comportamientos puede guiar decisiones estratégicas.',
        link: 'https://iddigitalschool.com/bootcamps/que-son-los-modelos-de-prediccion-en-data-science/'

    },
    {
        img: '/blog_cards_imgs/automation-card.png',
        title: 'Automatización de Procesos',
        text: 'Con ML, muchos procesos analíticos pueden ser automatizados, desde la limpieza y clasificación de datos hasta la generación de insights. Esto aumenta la eficiencia y permite manejar volúmenes grandes de datos que serían inviables de procesar manualmente.',
        link: 'https://aws.amazon.com/es/what-is/intelligent-automation/'
    },
    {
        img: '/blog_cards_imgs/anonimo-card.jpg',
        title: 'Descubrimiento de Patrones Ocultos',
        text: 'Los algoritmos de ML son capaces de identificar patrones y relaciones en los datos que no son evidentes a simple vista. Esto es valioso en la detección de fraudes, análisis de clientes, y descubrimiento de tendencias emergentes.',
        link: 'https://www.semperis.com/es/blog/ml-powered-attack-pattern-detection/'
    },
    {
        img: '/blog_cards_imgs/recomendacion-card.jpg',
        title: 'Personalización',
        text: ' En aplicaciones como la recomendación de productos o servicios, ML permite personalizar la experiencia del usuario, ofreciendo recomendaciones basadas en el comportamiento pasado y preferencias del individuo.',
        link: 'https://www.aprendemachinelearning.com/sistemas-de-recomendacion/'
    },
    {
        img: '/blog_cards_imgs/bigData-card.jpg',
        title: 'Análisis de Grandes Volúmenes de Datos',
        text: 'En la era del Big Data, los científicos de datos se enfrentan a conjuntos de datos masivos. ML ofrece herramientas para analizar y extraer valor de estos grandes volúmenes de datos de manera más efectiva que los métodos estadísticos tradicionales.',
        link: 'https://codster.io/blog/data-analytics/business-intelligence/como-se-relacionan-data-analytics-bi-y-machine-learning/'
    },
    {
        img: '/blog_cards_imgs/mejora-card.jpg',
        title: 'Mejora Continua',
        text: 'Los modelos de ML pueden mejorar continuamente conforme reciben más datos, lo que permite adaptarse a cambios y nuevas tendencias en los datos sin necesidad de rediseñar los modelos desde cero.',
        link: 'https://www.itsitio.com/inteligencia-artificial/machine-learning-un-factor-clave-en-la-mejora-continua-de-las-organizaciones/'
    }
];

export default function Blog() {


    return (
        <div className='app-container'>
            <Header />
            <div className='blogs-container'>

                <div className='blog-section-div'>
                    <img src="/mch_learning.jpg" alt="" />
                    <div className='blog-text-div'>

                        <h1 className='blog-title'>MACHINE <br></br>LEARNING</h1>
                        <p className='blog-text'>Es un proceso en el cual una computadora observa ciertos datos, crea un modelo basado en ellos,
                            y luego utiliza ese modelo para hacer predicciones o decisiones sobre datos nuevos.
                        </p>
                    </div>
                </div>
                <div className='w-full space-y-7 justify-center flex flex-col'>
                    <h1 className='section-title mb-10'>Importancia para Data Science</h1>
                    <div className='grid col-span-1 gap-15 grid-cols-3 px-5 gap-5'>
                        {blogCards.map((card) => Card(card.img, card.title, card.text, card.link))}
                    </div>
                </div>
                <div className='w-4/5 flex flex-col gap-9'>
                    <div className='differences-card w-full flex flex-row rounded-t-lg'>
                        <div className='title w-1/3 p-5 flex flex-wrap content-center justify-center'>
                            <h1 className='font-semibold text-3xl leading-loose'>Machine Learning <br></br>VS <br></br> Inteligencia Artificial</h1>
                        </div>
                        <div className='text w-2/3 p-5'>
                            <ul className='flex flex-col gap-3'>
                                <li><p>ML es una de las principales herramientas y enfoques dentro de la IA. Aunque la IA abarca un conjunto más amplio de tecnologías y enfoques, ML es una de las formas más populares y efectivas para implementar IA.

                                </p></li>
                                <li>
                                    <p>No todas las aplicaciones de IA requieren ML. Por ejemplo, un sistema de IA basado en reglas o lógica predefinida no necesariamente utiliza aprendizaje automático.</p>
                                </li>
                                <li>
                                    <p>Los algoritmos de ML se pueden aplicar a problemas que no necesariamente caen dentro del dominio de la IA, aunque en la práctica, ML es una herramienta clave para desarrollar sistemas inteligentes.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='differences-card w-full flex flex-row rounded-t-lg'>
                        <div className='text w-2/3 p-5'>
                            <ul className='flex flex-col gap-3'>
                                <li>
                                    <p>En el análisis estadístico lo que se busca es tratar de inferir y explicar relaciones entre los datos proporcionados. No se toman decisiones ni se realizan tareas a partir de los datos. </p>
                                </li>
                                <li>
                                    <p>Machine learning se enfoca en el rendimiento predictivo dados nuevos datos, el análisis estadístico trata de comprender las relaciones entre variables y construir modelos interpretables.</p>
                                </li>
                                <li>
                                    <p>En cuanto a la interpretabilidad, machine learning es mas una “caja negra”, no se sabe mucho acerca de como llega a ciertas predicciones. Por el otro lado, el análisis estadístico es mas interpretable, ya que se trata de comprender el efecto de cada variable en el resultado devuelto.</p>
                                </li>
                            </ul>
                        </div>
                        <div className='title w-1/3 p-5 flex flex-wrap content-center justify-center'>
                            <h1 className='font-semibold text-3xl leading-loose'>Machine Learning <br></br>VS<br></br> Analisis Estadístico</h1>
                        </div>
                    </div>
                    <div className='differences-card w-full flex flex-row rounded-t-lg'>
                        <div className='title w-1/3 p-5 flex flex-wrap content-center justify-center'>
                            <h1 className='font-semibold text-3xl leading-loose'>Machine Learning <br></br>VS<br></br> Data Mining</h1>
                        </div>
                        <div className='text w-2/3 p-5'>
                            <ul className='flex flex-col gap-3'>
                                <li><p>ML es una de las principales herramientas y enfoques dentro de la IA. Aunque la IA abarca un conjunto más amplio de tecnologías y enfoques, ML es una de las formas más populares y efectivas para implementar IA.

                                </p></li>
                                <li>
                                    <p>No todas las aplicaciones de IA requieren ML. Por ejemplo, un sistema de IA basado en reglas o lógica predefinida no necesariamente utiliza aprendizaje automático.</p>
                                </li>
                                <li>
                                    <p>Los algoritmos de ML se pueden aplicar a problemas que no necesariamente caen dentro del dominio de la IA, aunque en la práctica, ML es una herramienta clave para desarrollar sistemas inteligentes.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function Card(img, title, text, link) {
    console.log(link);
    return (
        <div className='blog-card flex flex-col w-4/5 mb-10'>
            <div className='card-img'>
                <img className='object-cover h-56 w-full' src={img} alt="" />
            </div>
            <div className='card-body flex flex-col gap-5 p-5'>
                <h2 className='card-title font-semibold'>{title}</h2>
                <a href={link} target="_blank"><h2 className='read-more w-fit cursor-pointer'> LEER MÁS</h2></a>
            </div>
        </div>
    );

}