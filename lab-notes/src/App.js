import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Welcome } from './noauth/welcomePage/Welcome';
import { NotFound } from './noauth/NoFoundPage/NotFound';
import { Home } from './auth/HomePage/Home';
import { loginStateUser } from './lib/provaiders.js'
import { Loading } from './elements/Loading';
import { ShowMichi } from './auth/MichiKaren/ShowMichi';

function App() {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loginStateUser(setUser, setLoading);
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
    <BrowserRouter>
      <div>
        {!user ?
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/load' element={<Loading />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<ShowMichi user={user} setLoading={setLoading} />} />
            <Route path='/notes' element={<Home user={user} setLoading={setLoading} />} />
          </Routes>
        }

      </div>
    </ BrowserRouter >
  );
}

export default App;
