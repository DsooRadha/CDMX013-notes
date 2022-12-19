import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Welcome } from './noauth/welcomePage/Welcome';
import { NotFound } from './noauth/NoFoundPage/NotFound';
import { Home } from './auth/Home';
import { loginStateUser, registerGitHub } from './lib/provaiders.js'
import { Loading } from './elements/Loading';


function App() {
  const [catchProvider, setCatchProvaider] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [allNotes, setAllNotes] = useState([]);
  const [hideMichi, setHideMichi] = useState(false)
  // registerGitHub(setCatchProvaider);

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
        {/* {loading && <Loading />} */}
        {!user ?
          <Routes>
            <Route path='/' element={<Welcome allNotes={allNotes} setHideMichi={setHideMichi} catchProvider={catchProvider} />} />
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
