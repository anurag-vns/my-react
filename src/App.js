import './App.css';
import HelloCalculator from './components/Hello';
import Timer from './components/Hello';
import Hello from './components/Hello';
 
function App(props) {
  
  return (
    <div className="container pt-5 bg-primary text-white text-center" id="root">
      <div class="row">
        <div class="col - sm-1"></div>
        <div class="col- sm-10 bg-hite">
      
      <HelloCalculator></HelloCalculator>
      </div>
     <div class="col-sm-1"></div>
	</div>
  </div>
  );
}
export default App;

