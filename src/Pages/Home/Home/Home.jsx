import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testimonial from '../Testimonial/Testimonial'
import CardSection from '../CardSection/CardSection'
import CallUs from '../CallUs/CallUs'
import { Helmet } from 'react-helmet-async';


const Home = () => {

  return (
    <div>
      <Helmet>
        <title>Bistro Boos | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <CardSection></CardSection>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home