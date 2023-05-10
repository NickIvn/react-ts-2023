import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-background">
      <SearchBar />
      <Cards />
    </div>
  );
};

export default Home;
