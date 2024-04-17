function Flashcard() {
  return(
    <>
    <div className="card-container">
      <div className="card-front">
        {/* props.title */}
        <h1>Title</h1>
      </div>
      <div className="card-back">
        {/* props.body or something */}
        <p>content</p>
      </div>
    </div>
    </>
  )
}

export default Flashcard