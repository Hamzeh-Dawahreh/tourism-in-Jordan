import "./HomePage.css";
function Tours({ toursData }) {
  return (
    <div className="cards">
      {toursData.map((tour) => (
        <div key={tour.name} className="card">
          <h2>Location {tour.name}</h2>
          <p>{tour.info}</p>
          <img
            src={`./src/Images/${tour.image}`}
            alt={tour.name}
            className="img1"
          />
          <br />
          <br />

          <h6>Price: {tour.price}</h6>
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default Tours;
