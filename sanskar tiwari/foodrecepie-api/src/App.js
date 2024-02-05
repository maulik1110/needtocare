import './App.css';
import axios from "axios";


function App() {
  const YOUR_APP_ID = "c0787a69"
  const YOUR_APP_KEY = "a652470f9d6c61b4474586162e730687"
  
  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  async function getrecepie(){
    var result = await axios.get(url);
    console.log(result.data);
  }

  return (
    <div className="App">
      <h1 onClick={getrecepie}>Hi Maulik</h1>
    </div>
  );
}

export default App;
