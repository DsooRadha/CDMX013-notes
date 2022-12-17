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
  }, []);

  //vista de cargando... Pending
  if (loading) {
    return <Loading />
  }
  return (
    <BrowserRouter>
      <div>
        {loading && <Loading />}
      
        {
          !loading && 
          !user ?
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/load' element={<Loading />} />
            </Routes>
            :
            <Routes>
              <Route path='/' element={<Home user={user} setLoading={setLoading} />} />
            </Routes>
        }

      </div>
    </ BrowserRouter >
  );
}

export default App;
