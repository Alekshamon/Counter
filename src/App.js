import './index.scss';
import {useState} from 'react'

function App() {
  const [count, setCount] =useState(0);

  const onClickPlus = () => {
  setCount(count+1);
}
const onClickMoins = () => {
  setCount(count-1);

}
  return (
    <div className="App">
      <div>
        <h2>COMPTEUR:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMoins}className="minus">- Moins</button>
        <button onClick={onClickPlus} className="plus">Plus +</button>
      </div>
    </div>
  );
}

export default App;
