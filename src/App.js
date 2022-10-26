
import './App.css';
import {useState} from 'react';


import MainSegundo from './components/MainSegundo';
import Login from "./components/Login"
import AppContext from './context/AppContext';
import UserDataContext from './context/UserDataContext'

function App() {
  const [active, setActive] = useState(true)
  const [userdata, setUserdata] = useState({
    id:1,
    firstname:"Andre",
    lastname: "da Silva",
    age: "35",
    email: "andre@andre.com",
  })
  return (
    <div>
      <UserDataContext.Provider value={{...userdata}}>
      <AppContext.Provider value={{setActive}}>
      <div className="App">
        {
          active ?
          (
            <Login></Login>
          ) : (
            <MainSegundo></MainSegundo>
          )
        }
        </div>
        </AppContext.Provider>
        </UserDataContext.Provider>
    </div>
  );
}

export default App;
