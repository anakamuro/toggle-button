import './App.css';
import React, {useState} from "react"
import Switch from "./components/Switch";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  return (
    <div className={`App ${theme}`}>
      <Switch rounded={true} onToggled={isToggled} onToggle={() => {
        setIsToggled(!isToggled) 
        changeTheme()
        }}/>
    </div>
  );
}

export default App;
