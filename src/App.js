import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import HomePage from './components/HomePage/HomePage';
import StoreProvider from './store/StoreProvider';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Tasks from './components/Tasks';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './Form.scss';


const App = () => {
  return (
    <StoreProvider>
      {/* <Router basename='/task-manager/frontend/build'> */}
      <Router basename='/'>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/project/:id" element={<Tasks />} />
          <Route exact path="/profile" element={<Profile />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
