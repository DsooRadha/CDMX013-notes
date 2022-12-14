import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Welcome } from './noauth/welcomePage/Welcome';
import { NotFound } from './noauth/NoFoundPage/NotFound';
import { Home } from './auth/Home';

function App() {
  const [user, setUser] = useState(null)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome setUser={setUser} />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
