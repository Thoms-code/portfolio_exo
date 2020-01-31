import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import yellow from '@material-ui/core/colors/yellow';

const AboutSkillsSection = () => {

    const pr = yellow[50];

    return (
        <section id="about_skills_section">
            <article className="about_skills_left">
                <h3>Soft Skills</h3>
                <CircularProgress variant="static" value={100} color={pr} />
                <h4>100%</h4>
                <p>Leadership, creativité, résolution de problèmes</p>
            </article>
            <article className="about_skills_middle">
                <h3>Front-end</h3>
                <CircularProgress variant="static" value={99} color={pr} />
                <h4>99%</h4>
                <p>HTML, CSS, SASS/SCSS, Javascript, React</p>
            </article>
            <article className="about_skills_right">
                <h3>Back-end</h3>
                <CircularProgress variant="static" value={98} color={pr} />
                <h4>98%</h4>
                <p>Laravel, php, c#, c++, Go, python</p>
            </article>
            <section id="about_skills_section-mobile">
                <div className="about_skills_soft">
                    <h3>Soft Skills</h3>
                    <CircularProgress variant="static" value={100} color={pr} />
                    <h4>100%</h4>
                    <p>Leadership, creativité, résolution de problèmes</p>
                </div>
                <div className="about_skills_front_back">
                    <article className="about_skills_middle-mobile">
                        <h3>Front-end</h3>
                        <CircularProgress variant="static" value={99} color={pr} />
                        <h4>99%</h4>
                        <p>HTML, CSS, SASS/SCSS, Javascript, React</p>
                    </article>
                    <article className="about_skills_right-mobile">
                        <h3>Back-end</h3>
                        <CircularProgress variant="static" value={98} color={pr} />
                        <h4>98%</h4>
                        <p>Laravel, php, c#, c++, Go, python</p>
                    </article>
                </div>
            </section>
        </section>
    )
}


export default AboutSkillsSection;