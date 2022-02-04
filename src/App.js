import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';




const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Header isLogin={false} />

        <Routes>
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/login" element={<LoginForm />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Router>
    </div >
  );
}

export default App;
