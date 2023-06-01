import './App.css';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="LeftPart">
        <Header />

        <div className="Content">
          
        </div>
      </div>
    </div>
  );
}

export default App;
