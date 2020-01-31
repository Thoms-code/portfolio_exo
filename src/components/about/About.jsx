import React, { Fragment , useEffect , useState } from 'react';

/* Import Page */
import AboutHeader from './AboutHeader';
import AboutFirstSection from './AboutFirstSection';
import Loading from '../misc/Loading';
import AboutStrongSection from './AboutStrongSection';
import AboutSkillsSection from "./AboutSkillsSection";
import AboutNoBullshit from './AboutNoBullshit';

const About = () => {

    const [loading , setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 1000);
    })


    if ( loading === false ) {
        return (
            <Fragment>
                <Loading />
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <AboutHeader />
                <AboutFirstSection />
                <AboutStrongSection />
                <AboutSkillsSection />
                <AboutNoBullshit />
            </Fragment>
        )
    }
}


export default About;