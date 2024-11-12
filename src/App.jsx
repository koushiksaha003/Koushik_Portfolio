import React from 'react'
import './index.css'
import Header from './compoments/header/Header'
import Nav from './compoments/nav/Nav'
import About from './compoments/about/About'
import Skill from './compoments/skill/Skill'
import Contact from './compoments/contact/Contact'
import Footer from './compoments/footer/Footer'
import Academic from './compoments/academic/Academic'
import Project from './compoments/project/Project'
const App = () => {
  return (
    <div class="kk">
      <Header />
     <Nav />
     <About />
     <Academic/>
     <Project/>
     <Skill />
     <Contact />
     <Footer/>
    </div>
  )
}

export default App
