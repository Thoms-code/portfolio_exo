import React from 'react';
import { Link } from "react-router-dom";

const HomeDigitalSection = () => {

    return (
        <article id="home_digital_section">
            <section className="home_digital_text">
                <h1>DIG<br/>ITAL.</h1>
                <h3> Une vision <br/><span>globale</span><br/>de votre<br/>stratégie<br/>digitale<span className="dot">.</span></h3>
                <p>Élément clé de votre transformation, la stratégie digitale nécessite une attention toute particulière. C’est cet accompagnement que l’ensemble de l’équipe vous propose tout au long du projet. À base de workshops, d’échanges et de brainstormings, nous faisons évoluer votre idée initiale vers une solution digitale ambitieuse.</p>
                <Link to="/nosvaleurs" className="home_digital_text_valeur">Nos Valeurs</Link>
            </section>
            <section className="home_digital_text-mobile">
                <h1>DIGITAL.</h1>
                <h3> Une vision <span>globale</span> de votre stratégie digitale<span className="dot">.</span></h3>
                <p>Élément clé de votre transformation, la stratégie digitale nécessite une attention toute particulière. C’est cet accompagnement que l’ensemble de l’équipe vous propose tout au long du projet. À base de workshops, d’échanges et de brainstormings, nous faisons évoluer votre idée initiale vers une solution digitale ambitieuse.</p>
                <Link to="/nosvaleurs" className="home_digital_text_valeur-mobile">Nos Valeurs</Link>
            </section>
            <section className="home_digital_category">
                <section>
                    <div>
                        <article>
                            <h1>Design</h1>
                            <h4>Web design</h4>
                            <h4>Direction artistique</h4>
                            <h4>Logo & branding</h4>
                            <h4>UI & UX</h4>
                        </article>
                        <article>
                            <h1>Digital & Mobile</h1>
                            <h4>Sites web</h4>
                            <h4>Responsive design</h4>
                            <h4>Mobile & Tablette</h4>
                            <h4>Applications mobile (iOS, Android) </h4>
                        </article>
                        <article>
                            <h1>Développement</h1>
                            <h4>Développement front & back</h4>
                            <h4>Interaction design</h4>
                            <h4>Magento, Wordpress</h4>
                            <h4>Symfony, Laravel </h4>
                        </article>
                        <article>
                            <h1>Social Media & Webmarketing</h1>
                            <h4>Stratégie Social Media</h4>
                            <h4>Community Management</h4>
                            <h4>Community Management</h4>
                            <h4>UReporting, live event</h4>
                            <h4>Emailing & jeux concours </h4>
                        </article>
                    </div>
                </section>
            </section>
            <section className="home_digital_category-mobile">
                <section>
                    <div>
                        <article>
                            <h1>Design</h1>
                            <h4>Web design / Logo & branding</h4>
                            <h4>Direction artistique / UI & UX</h4>
                        </article>
                        <article>
                            <h1>Digital & Mobile</h1>
                            <h4>Sites web / Mobile & Tablette</h4>
                            <h4>Responsive design / Applications mobile</h4>
                        </article>
                        <article>
                            <h1>Développement</h1>
                            <h4>Dév. front & back / Magento, Wordpress</h4>
                            <h4>Interaction design / Symfony, Laravel</h4>
                         </article>
                        <article>
                            <h1>Social Media & Webmarketing</h1>
                            <h4>Stratégie Social Media / UReporting, live event</h4>
                            <h4>Community Manage / Emailing & jeux concours</h4>
                        </article>
                    </div>
                </section>
            </section>
        </article>
    )
}


export default HomeDigitalSection;