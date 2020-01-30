import React from 'react';
import {Link} from 'react-router-dom'; 

const NotFound = () => {
    return (
        <section id="section_loading">
            <article>
                <h1>Erreur 404</h1>
                <h1>La page que vous cherchez n'existe pas.</h1>
                <Link to="/" className="">Retour à l'accueil </Link>
            </article>
        </section>
    )
}


export default NotFound;