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
      <Flashcard />
      <div>hi</div>
      <BsCaretLeftFill
       onClick={left}
      />
      <BsFillCaretRightFill
       onClick={right}
      />
    </div>


  </>
  )


}

export default StudyPage;