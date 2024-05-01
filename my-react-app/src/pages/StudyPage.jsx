import { IconContext } from "react-icons";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import Flashcard from "../components/Flashcard";
import "./StudyPage.css";
function StudyPage() {

  var number = 0;
  const left = () => {
    number--;
    console.log(number)
  }
  const right = () => {
    number++;
    console.log(number)
  }

  return (
    <>
    <div className="study-page">
      <h1>TOPIC TOP</h1>
      <Flashcard />
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