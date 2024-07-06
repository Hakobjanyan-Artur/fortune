import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/basket/Basket';
import Boys from './components/boys/Boys';
import Girls from './components/girls/Girls';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Men from './components/men/Men';
import Reg from './components/reg/Reg';
import Women from './components/women/Women';
import HomeWrapper from './pages/HomeWrapper';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeWrapper />}>
          <Route index element={<Main />} />
          <Route path='login' element={<Login />} />
          <Route path='reg' element={<Reg />} />
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='girls' element={<Girls />} />
          <Route path='boys' element={<Boys />} />
          <Route path='basket' element={<Basket />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

