import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import HomePage from './components/HomePage/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Header isLogin={false} />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Router>
    </div >
  );
}

export default App;
