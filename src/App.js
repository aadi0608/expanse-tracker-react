import './App.css';
import { Header } from './componants/Header';
import { Balance } from './componants/Balance';
import { IncomeExpences } from './componants/IncomeExpences';
import { TransactionList } from './componants/TransactionList';
import { AddTransaction } from './componants/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
  
    <div>
  <Header />
  <div className='container'>
    <Balance />
    <IncomeExpences />
    <TransactionList />
    <AddTransaction />
    <GlobalProvider/>
     </div>
    </div>
     );
}

export default App;
