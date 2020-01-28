import React, { Fragment , useState , useEffect } from 'react';
import Header from './components/Header';
import FirstSection from './components/home/FirstSection';
import Loading from "./components/Loading"

const App = () => {

    const [loading , setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000);
    })

    if (loading === true) {
        return (
            <Fragment>
            <Header />
            <main>
                <FirstSection />
            </main>
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