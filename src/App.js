import './App.css';
import AddBird from './components/AddBird';
import BirdList from './components/BirdList';

function App() {
  return (
    <div className="wrapper">
      <h1>Bird List</h1>
      <AddBird />
      <BirdList />
    </div>
  );
}

export default App;
