import logo from './logo.svg';
import './App.css';
import VsjItem from './components/VsjItem';
import Cmp from './components/Cmp';
import HelloWorld from './components/HelloWorld';
import Apple from './components/Apple';
function App() {
  return (
    <div className="App">
     <h1>Welcome to VSJ React</h1>
	 <VsjItem></VsjItem>
   <Cmp></Cmp>
   <HelloWorld></HelloWorld>
   <Apple></Apple>
    </div>
  );
}

export default App;