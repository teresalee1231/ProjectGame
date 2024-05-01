import PropTypes from 'prop-types';
import {useState} from 'react';

function Flashcard(props) {

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
            <p>{props.number}</p>
          </div>
          <div className="card-back">
            {/* props.body or something */}
            <p>content</p>
            <p>{props.number}</p>
          </div>
        </div>
      </div>


      </div>



    </>
  )
}

Flashcard.propTypes = {
  number: PropTypes.number
};


export default Flashcard