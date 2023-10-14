import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import NavBar from './components/nav/NavBar';
import Detail from './views/Detail';
import About from './views/About';
import Landing from './views/Landing';
import Helpers from './helper/Routes.helper'
import { useEffect, useState } from 'react';
import Favorites from './views/Favorites';

function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   //! FAKE DB
   const EMAIL = 'example@example.com';
   const PASSWORD = 'examplePass1';

   function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
       }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logOut = () => {
      setAccess(false);
      navigate('/');
   }


   const { pathname } = useLocation();

   useEffect(() => {
      if (pathname === "/") {
         document.body.className = "landBack";
      }
      if (pathname === "/home") {
         document.body.className = "homeBack";
      }
      if (pathname.startsWith("/detail")) {
         document.body.className = "detailBack";
      }
      if (pathname === "/about") {
         document.body.className = "aboutBack";
      }
      if (pathname === "/favorites") {
         document.body.className = "favoritesBack";
      }
   }, [pathname]);

   return (
      <div className="App">
         {pathname != "/" && <NavBar logOut={logOut}></NavBar>}
         <Routes>
            <Route path={Helpers.Landing} element={<Landing login={login}/>}></Route>
            <Route path={Helpers.Home} element={<Home/>}></Route>
            <Route path={Helpers.About} element={<About/>}></Route>
            <Route path={Helpers.Detail} element={<Detail/>}></Route>
            <Route path={Helpers.Favorites} element={<Favorites/>}></Route>
         </Routes>
      </div>
   );
}

export default App;