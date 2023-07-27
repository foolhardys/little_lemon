import React from 'react'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import Recipes from '../components/Recipes'
import HomeBanner from '../components/HomeBanner'

const Home = () => {
  return (
    <main>
      <SideBar/>
      <HomeBanner/>
      <Recipes/>
    </main>
  )
}

export default Home