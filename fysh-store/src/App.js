import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import NavBar from './routes/navigation/navbar.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NavBar />} >
        <Route index element={<Home />}/>
        <Route path='auth' element={<Authentication />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;