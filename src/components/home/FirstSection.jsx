import React , { useState, useEffect } from 'react';

const FirstSection = () => {

    const [test, setTest] = useState("test")

    // useEffect(()=> {
    //     window.addEventListener('scroll', () => {
    //         if(window.scrollY > 200) {

    //         }
    //     })
    // })
    return (
        <section id="first_section">
            <div id="red_background">
                <h1 id={test}>MY</h1>
                <h1 id="upper_h1">PORTFOLIO<span>.</span></h1>
            </div>
        </section>
    )
}


export default FirstSection;