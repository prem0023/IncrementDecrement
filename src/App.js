import { useState } from 'react';
import './index.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

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
          <br /><br />
          <div className='btn_div'>
            <Tooltip title="Add">
              <Button type='submit' onClick={increment} className='btn_green'>
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button type='submit' onClick={decrement} className='btn_red'>
                <DeleteSharpIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
