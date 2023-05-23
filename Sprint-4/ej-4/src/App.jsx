import "./App.css";
import Movie from "./components/movie";
function App() {
  return (
    <>
      <Movie
        title="Spider-Man"
        year="2019"
        image="spider.jpg"
        score="notViewed"
      />
      <Movie title="Batman" year="1989" image="batman.png" score="good" />
      <Movie
        title="Batman & Robin"
        year="1997"
        image="batman&robin.png"
        score="average"
      />
    </>
  );
}

export default App;
