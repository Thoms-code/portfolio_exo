import React from 'react';
import { Link } from "react-router-dom";

const HomeIdeaSection = () => {
    return (
        <section id="home_idea_section">
            <article className="home_idea_section_top">
                <h1>ID<br/>EAS.</h1>
                <figure className="home_idea_figure"></figure>
            </article>
            <article className="home_idea_section_top-mobile">
                <h1>IDEAS.</h1>
                <h2> Un studio au service des <span>Startups.</span></h2>
                <figure className="home_idea_figure-mobile"></figure>
            </article>
            <article className="home_idea_section_bottom">
                <section className="home_idea_section_bottom_left">
                    <h2> Un studio au <br/>service des <br/><span>Startups.</span></h2>
                </section>
                <section className="home_idea_section_bottom_middle">
                    <p>Vous avez imaginé une nouvelle plateforme digitale innovante, une application mobile révolutionnaire, un chatbot qui améliore la vie, ou envie de changer le monde ? Alors faisons-le ensemble.</p>
                </section>
                <section className="home_idea_section_bottom_right">
                    <p>Nous nous mettons à votre disposition pour réaliser vos rêves. Notre méthode d’accompagnement va transformer votre idée géniale en prototype réel, puis en business rentable.</p>
                    <Link to="/idea">Découvrez comment</Link>
                </section>
            </article>
            <article className="home_idea_section_bottom-mobile">
                <section className="home_idea_section_bottom_middle">
                    <p>Vous avez imaginé une nouvelle plateforme digitale innovante, une application mobile révolutionnaire, un chatbot qui améliore la vie, ou envie de changer le monde ? Alors faisons-le ensemble.</p>
                </section>
                <section className="home_idea_section_bottom_right">
                    <p>Nous nous mettons à votre disposition pour réaliser vos rêves. Notre méthode d’accompagnement va transformer votre idée géniale en prototype réel, puis en business rentable.</p>
                    <Link to="/idea">Découvrez comment</Link>
                </section>
            </article>
        </section>
    )
}


export default HomeIdeaSection;