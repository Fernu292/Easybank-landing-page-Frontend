import React from 'react';
import '../styles/App.css';

//Components
import Header from '../Layout/Header';
import WhyUs from '../Layout/WhyUs';
import Articles from '../Layout/Articles';
import Footer from '../Layout/Footer';


const App = () => {
    return (
        <>
            <Header />
            <WhyUs />
            <Articles />
            <Footer />
        </>
    );
}
 
export default App;