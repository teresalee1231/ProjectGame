import PropTypes from 'prop-types';
import Card from './Card'

function Section(props) {
  return(
    <div className="sec">
      <h1>{props.title}</h1>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string
};

export default Section