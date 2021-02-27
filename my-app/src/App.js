import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      
       <nav class="head-nav">
            <ul class="nav-list">
                <li>
                    <a href="home.html" >Home</a>
                </li>
                <li>
                    <a href="#Gazette" >Gazette</a>
                </li>
                <li>
                    <a href="#News" >News</a>
                </li>
                <li>
                    <a href="#About Us" >About Us</a>
                </li>
          </ul>
        </nav>
      

        <div className = "appName">
            <h1 >Coco-Measure</h1>
        </div>
        <div className = "appDescription">
          <h3>Measure before you buy it...</h3>
        </div>
        <div className = "buttonContainer">
          <div className = "button1">
              <button className="btn">Use Camera</button>
          </div>
          <div className = " button2">
              <button className="btn">Inserta an Image</button>
          </div>
          <div className = " button3">
              <button className="btn">View Price Categories</button>
          </div>
        </div>
      
      
    </div>
  );
}

export default App;
