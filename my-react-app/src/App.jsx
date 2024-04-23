import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Flashcard from './components/Flashcard'
import StudyPage from './pages/StudyPage'
function App() {


  return (
    <>
      <Navbar />
      <div className='content'>
        <Section
          title="test title"
         />
         <Section
          title="Cards"
          />

          <Flashcard />
      </div>

      <StudyPage />
    </>
  )
}

export default App
