import './App.css';
import Banner from './Components/Banner/Banner';
import MovieCard from './Components/MovieCard/MovieCard';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <MovieCard/>
    </div>
  );
}

export default App;
