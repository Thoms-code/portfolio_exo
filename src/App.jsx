import React, { Fragment , useState , useEffect } from 'react';
import Header from './components/Header';
import Loading from "./components/misc/Loading";
import MainHome from './components/home/MainHome';
import HomeFirstBanner from './components/home/HomeFirstBanner';
import HomeDigitalSection from './components/home/HomeDigitalSection';
// import HomeCreativeSection from './components/home/HomeCreativeSection';

const App = () => {

    const [loading , setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 1000);
    })

    if (loading === true) {
        return (
        <Fragment>
            <Header />
            <MainHome />
            <HomeFirstBanner />
            <HomeDigitalSection />
            {/* <HomeCreativeSection /> */}
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