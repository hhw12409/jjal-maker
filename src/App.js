import './App.css';
import Header from './components/Header';
import Body from './components/Body'

function App() {

  const CAT1 = "https://cataas.com/cat/60b73094e04e18001194a309/says/react";

  return (
    <div className="App">
      <Header></Header>
      <Body img={CAT1}></Body>
    </div>
  );
}

export default App;
