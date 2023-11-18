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
import axios from "axios";

function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const [ messagePop , setmessagePop] = useState("");
   const [ activePop, setActivePop] = useState(false)
   const [ isLogin , setIsLogin] = useState(true)
 
   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      // ASYNC-AWAIT
      try {
         const response = await axios.get(URL + `?email=${email}&password=${password}`)
         const data = response.data;

         setAccess(data.access);
         data.access && navigate('/home');
      } catch (error) {
         setActivePop(true)
         setmessagePop(error.response.data.message)
         setIsLogin(false)
      }

      // PROMISES

      /* axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      }); */
   }

   function signIn(userData) {

      const URL = 'http://localhost:3001/rickandmorty/login/';

      axios
         .post(URL, userData)
         .then((response) => {
            if (response) {
               setActivePop(true)
               setmessagePop(response.data.message)
               setIsLogin(true)
            } 
         })
         .catch((error) => {
            setActivePop(true)
            setmessagePop(error.response.data.message)
            setIsLogin(false)
         })
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logOut = () => {
      setAccess(false);
      navigate('/');
   }

   const handlePopUp = () => {
      setActivePop(!activePop)
   }

   const handlerFragment = () => {
      setIsLogin(!isLogin)
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
            <Route path={Helpers.Landing} element={<Landing isLogin={isLogin} login={login} signIn={signIn} message={messagePop} active={activePop} handler={handlePopUp} handlerFragment={handlerFragment} />}></Route>
            <Route path={Helpers.Home} element={<Home/>}></Route>
            <Route path={Helpers.About} element={<About/>}></Route>
            <Route path={Helpers.Detail} element={<Detail/>}></Route>
            <Route path={Helpers.Favorites} element={<Favorites/>}></Route>
         </Routes>
      </div>
   );
}

export default App;