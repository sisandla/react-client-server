// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';

import MovieAPI from './api/MovieAPI';

import MovieForm from './components/MovieForm';
import MovieTable from './components/MovieTable';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    MovieAPI.loadMovies().then((movies) => {
      this.setState({ movies: movies });
    });
  }

  render() {
    return (
      <Container>
        <h1>My Movies</h1>
        <Row>
          <MovieTable movies={this.state.movies}
            deleteMovie={this.deleteMovie} />
        </Row>
        <h2>Add new movie</h2>
        <MovieForm addMovie={this.addMovie} />
      </Container>
    );
  }

  addMovie = async (movie) => {
    await MovieAPI.addMovie(movie);
    let movies = await MovieAPI.loadMovies();
    this.setState({ movies: movies });
  }

  deleteMovie = async (movieId) => {
    await MovieAPI.deleteMovie(movieId);
    let movies = await MovieAPI.loadMovies();
    this.setState({ movies: movies });
  }

}

export default App;
