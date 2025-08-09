import React from 'react';
import Banner from '../Banner/Banner';
import CountDown from '../CountDown/CountDown';
import Card from '../Services/Card';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Companies from '../Companies/Companies';
import Marque from '../Marque/Marque';
import SoftwareProcess from '../SoftwareProcess/SoftwareProcess';
import FAQ from '../Faq/FAQ';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <CountDown></CountDown>
          <Card></Card>
          <SoftwareProcess></SoftwareProcess>
          <WhyChooseUs></WhyChooseUs>
          <Companies></Companies>
          <Marque></Marque>
          <FAQ></FAQ>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;