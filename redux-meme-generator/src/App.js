import MemeList from './components/MemeList';
import MemeForm from './components/MemeForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux Meme Generator</h1>
      <div className="MemeForm">
        <MemeForm />
      </div>
      <div className="MemeList">
        <MemeList />
      </div>
    </div>
  );
}

export default App;
