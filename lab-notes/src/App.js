import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Welcome } from './noauth/welcomePage/Welcome';
import { NotFound } from './noauth/NoFoundPage/NotFound';
import { Home } from './auth/Home';
import { loginStateUser } from './lib/provaiders.js'
import { Loading } from './elements/Loading';


function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    loginStateUser(setUser, setLoading);
  }, [])
  //vista de cargando...
  //the en la promesa de login si el estado de cargando es true loadin sino todo lo demas
  //set loading 
  //variable de estado
  //no necesitas rutas para loading
 
  return (
    <BrowserRouter>
      <div>
      { loading && <Loading /> }
        {/* <Routes>
          <Route path='/' element={<Loading />} />
        </Routes> */}
        { !loading &&
        !user ?
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Home user={user} setLoading={setLoading}/>} />
            <Route path='/test' element={<h1>PRUEBA</h1>} />
          </Routes>
        }

      </div>
    </ BrowserRouter >
  );
}

export default App;
