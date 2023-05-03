import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/HomePage/HomePage";
import toursData from "./Components/HomePage/toursData";

function App() {
  return (
    <div>
      <Navbar />
      <Home toursData={toursData} />
      <Footer />
    </div>
  );
}

export default App;
