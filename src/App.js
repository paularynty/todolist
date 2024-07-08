import './App.css';
import DarkModeToggle from './components/DarkModeToggle';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <DarkModeToggle />
    </div>
  );
}

export default App;