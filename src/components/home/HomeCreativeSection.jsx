import React from 'react';
import { Link } from "react-router-dom";

const HomeCreativeSection = () => {
    return (
        <article id="home_creative_section">
            <section className="home_creative_left">
                <h1>C<br/>REA.</h1>
                <figure></figure>
                <figcaption>Projet " Decathlon recrutement ".</figcaption>
            </section>
            <section className="home_creative_left-mobile">
                <h1>CREA.</h1>
                <h2>La créativité au service de <span>l’utilisateur<span className="dot">.</span></span></h2>
                <p>Une expérience utilisateur efficace et immersive, c’est ce qui permet de capter l’attention et de diffuser un message clair. C’est pourquoi nous accordons extrêmement d’importance à ce que l’ergonomie serve le design, et que ce design soit novateur et soigné. </p>
                <Link to="/projets" className="home_creative_right_link-mobile">Découvrir notre travail</Link>
            </section>
            <section className="home_creative_right-mobile">
                <figure></figure>
                <figcaption>Projet " Decathlon recrutement ".</figcaption>
            </section>
            <section className="home_creative_right">
                <h1>La créativité <br/>au service de <br/><span>l’utilisateur<span className="dot">.</span></span></h1>
                <p>Une expérience utilisateur efficace et immersive, c’est ce qui permet de capter l’attention et de diffuser un message clair. C’est pourquoi nous accordons extrêmement d’importance à ce que l’ergonomie serve le design, et que ce design soit novateur et soigné. </p>
                <Link to="/projets" className="home_creative_right_link">Découvrir notre travail</Link>
            </section>
        </article>
    )
}


export default HomeCreativeSection;