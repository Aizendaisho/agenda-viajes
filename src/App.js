import Header from "./componentes/header/Header"
import AgendaInfo from "./componentes/agenda/AgendaInfo";
import './App.css';
console.log(AgendaInfo)

function App() {
  return (
    <div className="App">
      <Header />
      {AgendaInfo}
    </div>
  );
}

export default App;
