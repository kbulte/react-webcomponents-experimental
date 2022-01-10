import './App.css'
import { WefElement } from 'wef-element'

function App() {

  const handleElementClick = () => {
    console.log("handling component event");
  }

  return (
    <div className="App">
      <wef-element onWefElementClicked={handleElementClick}></wef-element>
      <p>This is from React.</p>
    </div>
  )
}

export default App
