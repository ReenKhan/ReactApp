import './css/App.css';
import Header from './components/header'
import Money from './components/CashInput'
import TicketNumber from './components/TicketNumber'


function App() {

  return (
    <div className="root">
      <Header/>
      <div className="App">
        <Money/>
        <TicketNumber/>
      </div>
    </div>
  );
}

export default App;

