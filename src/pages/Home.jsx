import React from 'react'
import SideBar from '../components/SideBar'
import Recipes from '../components/Recipes'
import HomeBanner from '../components/HomeBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <SideBar/>
      <HomeBanner/>
      <Recipes/>
      <Footer/>
    </main>
  )
}

export default Home