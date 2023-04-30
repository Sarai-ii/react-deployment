import spongebob from './Spongebob.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spongebob} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/sarai-ii"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow Me
        </a>
      </header>
    </div>
  );
}

export default App;
