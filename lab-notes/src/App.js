import { BrowserRouter, Route, Routes, redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Welcome } from './noauth/welcomePage/Welcome';
import { NotFound } from './noauth/NoFoundPage/NotFound';
import { Home } from './auth/Home';
import { loginStateUser } from './lib/provaiders.js'


function App() {
  const [user, setUser] = useState(null)

useEffect(()=>{
  loginStateUser(setUser);
}, [])
 //vista de cargando...
  
  return (
    <BrowserRouter>
      <div>
        {!user ?
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Home user={user}/>} />
            <Route path='/test' element={<h1>PRUEBA</h1>} />
          </Routes>
        }
      </div>
    </ BrowserRouter >
  );
}

export default App;
