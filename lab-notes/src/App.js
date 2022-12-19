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
  const [allNotes, setAllNotes] = useState([]);
  const [hideMichi, setHideMichi] = useState(false)

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
            <Route path='/' element={<Welcome allNotes={allNotes} setHideMichi={setHideMichi} />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/load' element={<Loading />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Home setHideMichi={setHideMichi} hideMichi={hideMichi} user={user} setLoading={setLoading} allNotes={allNotes} setAllNotes={setAllNotes} />} />
          </Routes>
        }

      </div>
    </ BrowserRouter >
  );
}

export default App;
