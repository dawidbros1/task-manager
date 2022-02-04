import './App.scss';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div className="container-fluid">
      <Header isLogin={true} />
    </div>
  );
}

export default App;
