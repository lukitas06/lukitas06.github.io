import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/project.css';
import style from '../styles/markdown-styles.module.css';
import ReactMarkdown from 'react-markdown';

export default function Project() {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        // Carga dinámica del archivo Markdown basado en el id
        if (id === "Boston") {
            fetch("/Boston.html")
                .then((response) => response.text())
                .then((html) => setContent(html));
            setFetched(true);
        }
        else {
            import(`../lib/projects/${id}.md`)
                .then(res => fetch(res.default))
                .then(res => res.text())
                .then(text => setContent(text))
                .catch(err => console.error(err));
            setFetched(true);
        }
    }, [id]);

    if (id === "Boston" && fetched === true) {
        console.log(content);
        return (
            <div className='app-container'>
                <Header />
                <div className='project-container '>
                    <img className='project-background-img bg-gradient-to-t' src={`/background_projects/${id}.jpg`} alt="" />
                    <div className='proyect-details-div p-0'>

                        <div className='w-full' dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    else {


        return (
            <div className='app-container'>
                <Header />
                <div className='project-container '>
                    <img className='project-background-img bg-gradient-to-t' src={`/background_projects/${id}.jpg`} alt="" />
                    <div className='proyect-details-div'>

                        <ReactMarkdown className={style.reactMarkDown}>{content}</ReactMarkdown>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}