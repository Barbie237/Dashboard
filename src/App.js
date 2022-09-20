import React from 'react';
import  Home  from "./pages/home/Home";
import  Login  from "./pages/login/Login";
import  Logout  from "./pages/logout/Logout";
import  Stat  from "./pages/stat/Stat";
import  Notif  from "./pages/notif/Notif";
import  SystemH  from "./pages/systemH/SystemH";
import  Logs  from "./pages/logs/Logs";
import  Setting  from "./pages/setting/Setting";
import  List  from "./pages/list/List";
import  ListB  from "./pages/list/ListB";
import  ListV  from "./pages/list/ListV";
import  ListM  from "./pages/list/ListM";
import  New  from "./pages/new/New";
import {userInputs, budgetInputs, motifInputs, versementInputs} from "./formSource";
import  Single  from "./pages/single/Single";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./style/dark.scss";
import {useContext} from "react";
import {DarkModeContext} from "./context/darkModeContext";


function App() {

  const { darkMode } = useContext( DarkModeContext );
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes> 
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route index element={<Home />}/> 
            <Route path="logout" element={<Logout />} /> 
            <Route path="stat" element={<Stat />} />
            <Route path="notif" element={<Notif />} />
            <Route path="systemH" element={<SystemH />} />
            <Route path="logs" element={<Logs />} />
            <Route path="setting" element={<Setting />} />
            <Route  path="users"> 
              <Route index element={<List />}/> 
              <Route path=":userId" element={<Single />}/>   
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/> 
            </Route>
            <Route  path="budget"> 
              <Route index element={<ListB />}/> 
              <Route path=":budgetId" element={<Single />}/>   
              <Route path="new" element={<New inputs={budgetInputs} title="Add New Budget"/>}/> 
            </Route>
          </Route>
          <Route path="motif"> 
              <Route index element={<ListM />}/> 
              <Route path=":budgetId" element={<Single />}/>   
              <Route path="new" element={<New inputs={motifInputs} title="Add New Budget"/>}/> 
            </Route>
         <Route  path="versement"> 
              <Route index element={<ListV />}/> 
              <Route path=":versementId" element={<Single />}/>   
              <Route path="new" element={<New inputs={versementInputs} title="Add New Budget"/>}/> 
            </Route>
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
