import { useState } from 'react';
import './App.css';

export function replaceCameWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {

  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)
  const color = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  return (
    <div>
      <button 
      style={{backgroundColor: disabled ? 'gray' : buttonColor, color:'white'}} 
      onClick={() => setButtonColor(color)}
      disabled={disabled}>
        Change to {replaceCameWithSpaces(color)}
      </button>
      <br/>
      <input 
      type="checkbox" 
      id="disable-button-checkbox"
      onClick={(e) => setDisabled(e.target.checked)}
      aria-checked={disabled}
      defaultChecked={disabled}/>
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
