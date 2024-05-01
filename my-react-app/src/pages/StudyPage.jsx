import { React, useState} from 'react'
import { IconContext } from "react-icons";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Flashcard from "../components/Flashcard";
import "./StudyPage.css";
function StudyPage() {

  const[counter, setCounter] = useState(0);
  // var count = 0;
  const left = () => {
    setCounter(count => count - 1);
    // console.log(count)
  }
  const right = () => {
    setCounter(count => count + 1);
    // console.log(number)
  }

  return (
    <>
    <div className="study-page">
      <h1>TOPIC TOP</h1>
      <Flashcard
        number= {counter}
      />
      <div className="test2">
        <IconContext.Provider value={{ className: "test"}}>
          <BsCaretLeftFill
          onClick={left}
          />
          <BsFillCaretRightFill
          onClick={right}
          />
        </IconContext.Provider>
      </div>

    </div>


  </>
  )


}

export default StudyPage;