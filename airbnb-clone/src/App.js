import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import katie from "./images/katie-zaferes.png";
import data from "./data";
function App() {
  const cards = data.map((item) => {
    return <Card item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards--list">{cards}</section>
    </div>
  );
}

export default App;
