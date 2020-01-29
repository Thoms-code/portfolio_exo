import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import red from '@material-ui/core/colors/red';

const Loading = () => {

    const primary = red[50];

    return (
        <section id="section_loading">
            <article>
                <CircularProgress color={primary} />
                <h1>Chargement...</h1>
            </article>
        </section>
    )
}


export default Loading;