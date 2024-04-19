import {useState} from 'react';

function Flashcard() {

  const[isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped)
  };

  return(
    <>
    <div className="card-container">

      <div
          onClick={handleFlip}
          className={`flip-card ${
              isFlipped ? "flipped" : ""
          }`}
      >

        <div className="card-content">
          <div className="card-front">
            {/* props.title */}
            <h1>Title</h1>
          </div>
          <div className="card-back">
            {/* props.body or something */}
            <p>content</p>
          </div>
        </div>
      </div>


      </div>



    </>
  )
}

export default Flashcard