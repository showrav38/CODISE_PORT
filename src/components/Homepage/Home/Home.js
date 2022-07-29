import React from 'react';
import Contact from '../../Pages/Conctact/Contact';
import Common from '../Common/Common';
import GrowingTeach from '../GrowingTeach/GrowingTeach';
import MainServices from '../MainServices/MainServices';
import NavBar from '../Navbar/NavBar';
import Testim from '../Testim/Testim';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Common
            name="Customized"
            maintag=" IT Services"
            tag="Codise is a reputed web development company, acquiring the ideal combination of technology."
            conbg="bg-image"
            consearch="tourz-search-1"
            />
            <MainServices/>
            <GrowingTeach/>
            <Testim/>
            
            {/* <NavBar/> */}
            {/* <Contact/> */}
        </div>
    );
};

export default Home;