function PetDetail() {
  return (
    <div className="Profile-form">
      <h1>Bubble-Variable</h1>
      <form id="form" noValidate>
        <label htmlFor="name">Name:</label>
        <div className="form-field">
          <input
            type="text"
            name="name"
            placeholder="Change the name-variable"
            className="form-input"
          />
        </div>
        <label htmlFor="description">Description:</label>
        <div className="form-field">
          <input
            type="text"
            name="description"
            placeholder="Change the description variable"
            className="form-input"
          />
        </div>
      </form>
      <div className="submit-container">
        <button type="button" className="submit-button">
          Change
        </button>
      </div>
    </div>
  )
}

export default PetDetail
