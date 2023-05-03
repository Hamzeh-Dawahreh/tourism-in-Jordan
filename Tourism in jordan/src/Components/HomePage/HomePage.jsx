import Tours from "./Tour";
import toursData from "./toursData";
function Home() {
  return (
    <div>
      <Tours toursData={toursData} />
    </div>
  );
}

export default Home;
