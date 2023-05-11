import MemeList from './components/MemeList';
import MemeForm from './components/MemeForm';
import './App.css';

function App() {
  return (
    <div className="App">
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
