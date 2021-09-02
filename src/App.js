import React, { Fragment, useEffect } from 'react';
import './App.css';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// Components
import Header from './components/layout/Header';
import Details from './components/pages/Details';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';

const App = () => {
    useEffect(() => {
        document.body.style.paddingTop = `${document.getElementById('nav').clientHeight}px`;
        AOS.init({
            duration: 2000
        });
        // eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            <Header />
            <Home />
            <Details />
            <Footer />
        </Fragment>
    )
}

export default App;
