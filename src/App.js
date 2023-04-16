import './App.css';
import BmiCalculator from './components/fitness/bmi';
import Header from './components/Header';
import CardWithLinks from './components/cards';

function App() {
  return (
    
    <div>
      <Header/>
      <div class="wrapper">
        <div class="section-left">
          <BmiCalculator/>
        </div>
        <div class="section-right">
          <CardWithLinks/>
        </div>
      </div>

    </div>
  );
}

export default App;
