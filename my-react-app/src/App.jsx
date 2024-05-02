import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Flashcard from './components/Flashcard'
import StudyPage from './pages/StudyPage'
import PlusButton from './components/PlusButton'
function App() {


  return (
    <>
      <Navbar />
      <div className='content'>
        {/* fix something later */}
        <div className="sec">
          <h1>Pinned Cards</h1>
          <div className="cards">
            <Card />
            <Card />
          </div>
        </div>
        <div className="sec">
          <h1>Cards</h1>
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <PlusButton />
          </div>
        </div>
      </div>

      <StudyPage />
    </>
  )
}

export default App
