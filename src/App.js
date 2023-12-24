// Desc: This is the main file for the application
import {Routes, Route, BrowserRouter,} from 'react-router-dom';
import StudentLogin from './studentLogin';
import './App.css';
import Home from "./Home";

function App() {

    <p>hello world</p>
    return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter  >
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/studentLogin" element={<StudentLogin />} />
          </Routes>
        </BrowserRouter >
      </header>
    </div>

  );


}

export default App;
