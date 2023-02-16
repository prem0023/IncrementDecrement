import { useState } from 'react';
import './index.css';

function App() {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  }

  const decrement = () => {
    if(num === 0){
      alert('Sorry, Zero Limit Reached');
      return;
    }
    setNum(num - 1);
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1> {num} </h1>
          <div className='btn_div'>
            <button type='submit' onClick={increment} > Increm</button>
            <button type='submit' onClick={decrement} > Decrem</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
