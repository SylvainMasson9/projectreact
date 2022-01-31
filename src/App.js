import logo from './logo.svg';
import './App.css';
import ButtonPerso from './ButtonPerso';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <ButtonPerso coucou="coucou"/>
        {ButtonPerso({coucou:"coucou"})}
      </header>
    </div>
  );
}

export default App;
