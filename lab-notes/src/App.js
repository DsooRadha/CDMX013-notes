import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Welcome } from './noauth/welcomePage/Welcome';
import { NotFound } from './noauth/NoFoundPage/NotFound';
import { Home } from './auth/Home';
import { loginStateUser } from './lib/provaiders.js'

function App() {
  // const [user, setUser] = useState(null)
 const user= sessionStorage.uid
//  window.localStorage.getItem('user')
//JSON.parse(obj)

  loginStateUser();
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<Welcome setUser={setUser} />} />
  //       <Route path='*' element={<NotFound />} />
  //       <Route path='/home' element={<Home />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
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
             <Route path='/home' element={<Home />} />
          </Routes>
        }
      </div>
    </ BrowserRouter>
  );
}



export default App;
