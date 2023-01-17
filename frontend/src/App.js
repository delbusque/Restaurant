import './css/App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Tables from './components/Tables.js';

import Navigation from './components/Navigation.js';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tables' element={<Tables />} />
      </Routes>

    </div>
  );
}

export default App;
