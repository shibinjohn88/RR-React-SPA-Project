import './App.css';
import Banner from './Components/Banner/Banner';
import MovieCard from './Components/MovieCard/MovieCard';
import Navbar from './Components/Navbar/Navbar';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [state,setState] = useState('')
  return (
    <div className="App">
      <Navbar/>
      <Banner state={state} />
      <MovieCard/>
      <button onClick={() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        //   console.log(response.data)
        //   setState(response.data)
        // })
        setState("load")
      }}>Click me</button>
      {/* {state.map((obj, index) => {
        return(
          <div>
            <h1>{index}</h1>
            <h4>{obj.title}</h4>
          </div>
        )
      })
      } */}
    </div>
  );
}

export default App;
    
