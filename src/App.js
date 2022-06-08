
import './App.css';
import Kijelzo from './komponensek/kijelzo';
import Gombok from './komponensek/gombok';
import stringMath from "string-math";

function App() {
  return (
    <div className="App">
        <div className='calc'>
          <Gombok></Gombok>
        </div>
    </div>
  );
}

export default App;
