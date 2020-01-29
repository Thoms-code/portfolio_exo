import React, { Fragment , useState , useEffect } from 'react';
import Header from './components/Header';
import Loading from "./components/misc/Loading"

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