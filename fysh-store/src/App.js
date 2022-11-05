import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import NavBar from './routes/navigation/navbar.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NavBar />} >
        <Route index element={<Home />}/>
        <Route path='sign-in' element={<SignIn />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;