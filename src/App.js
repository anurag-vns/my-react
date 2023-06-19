import logo from './logo.svg';
import './App.css';
import VsjItem from './components/VsjItem';
import Cmp from './components/Cmp';
import HelloWorld from './components/HelloWorld';
import Apple from './components/Apple';
import Variable from './components/Variable';
import Comp from './components/Comp';
function App() {
  return (
    <div className="App">
      <div className='backcolor'>
     <h1>Welcome to VSJ React</h1>
	 <VsjItem></VsjItem>
   <Cmp></Cmp>
   <HelloWorld></HelloWorld>
   <Apple></Apple>
   <Variable></Variable>
   <Comp></Comp>
   </div>
    </div>
  );
}

export default App;