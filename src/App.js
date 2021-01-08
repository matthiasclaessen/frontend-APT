import Movies from './containers/movies';
import Watchlist from './containers/watchlist';

function App() {
  return (
    <div className="App">
      <h1 className="project__title">Frontend APT</h1>
      <div className="container">
        <Movies />
        <Watchlist />
      </div>
    </div>
  );
}

export default App;
