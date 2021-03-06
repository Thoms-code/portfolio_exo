import React, { Fragment , useState , useEffect } from 'react';
import Header from './components/home/Header';
import Loading from "./components/misc/Loading";
import MainHome from './components/home/MainHome';
import HomeFirstBanner from './components/home/HomeFirstBanner';
import HomeDigitalSection from './components/home/HomeDigitalSection';
import HomeCreativeSection from './components/home/HomeCreativeSection';
import HomeIdeaSection from './components/home/HomeIdeaSection';

const App = () => {

    const [loading , setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 3000);
    })

    if (loading === true) {
        return (
        <Fragment>
            <Header />
            <MainHome />
            <HomeFirstBanner />
            <HomeDigitalSection />
            <HomeCreativeSection />
            <HomeIdeaSection />
        </Fragment>
    )
    } else {
        return (
            <Fragment>
                <Loading />
            </Fragment>
        )
    }
}


export default App;